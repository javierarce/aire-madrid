'use strict'

const http = require('http')
const parser = require('xml2json')
const fs = require('fs')

const CONFIG = require('./config')
const POLLUTANTS = require('./data/pollutants')
const STATIONS = require('./data/stations')

module.exports = class Air {
  constructor (source) {
    this.source = source
  }

  importData() {
    const options = {
      headers: { 'Accept': 'application/xml' },
      method: 'GET',
      hostname: CONFIG.host,
      path: CONFIG.path
    }

    return new Promise((resolve, reject) => {
      if (this.source) {
        let data = fs.readFileSync(this.source)
        return resolve(this.extractData(data))
      }

      const req = http.request(options, res => {
        let data = []

        res.on('data', (content) => {
          data+=content
        })

        res.on('end', () => {
          try {
            resolve(this.extractData(data))
          } catch (error) {
            return reject(error)
          }
        })
      })

      req.on('error', error => {
        console.error(error)
        reject(error)
      })

      req.end()
    })
  }

  pickScoring (number, scoring) {
    let score = scoring.filter((score) => {
      return this.isInRange(number, score.range)
    })

    if (score && score.length) {
      let name = score[0].name 
      let value = score[0].value 

      return { name, value }
    } else {
      return undefined
    }
  }

  isInRange (number, range) {
    return range[0] <= number && number <= range[1]
  }

  padNumber (number) {
    return (number < 10) ? `0${number}` : number
  }

  getArrayFromHash (array) {
    let response = []

    for (let key in array) {
      response.push(array[key])
    }

    return response
  }

  getPollutants () {
    return new Promise((resolve, reject) => {
      try {
        let response = this.getArrayFromHash(POLLUTANTS)
        resolve(response)
      } catch (error) {
        console.error(error)
        return reject(error)
      }
    })
  }

  getStations () {
    return new Promise((resolve, reject) => {
      try {
        let response = this.getArrayFromHash(STATIONS)
        resolve(response)
      } catch (error) {
        console.error(error)
        return reject(error)
      }
    })
  }

  getReadings (options = undefined) {
    return new Promise((resolve) => {
      this.importData().then((stations) => {
        
        if (options == undefined) {
          return resolve(this.getArrayFromHash(stations))
        } 

        let pollutants = options.pollutants

        if (options.pollutant) {
          pollutants = [options.pollutant]
        }

        if (options.station) {
          let result = this.filterByStation(stations, options.station, pollutants)
          return resolve(result)
        }

        if (options.stations) {
          let result = []

          options.stations.forEach((stationID) => {
            result.push(this.filterByStation(stations, stationID, pollutants))
          })

          resolve(result)
        }
      })
    })
  }

  filterByStation (stations, stationID, pollutantsIDs) {
    let station = stations[stationID]
    let result = station

    if (pollutantsIDs && pollutantsIDs.length) {

      result = { ...station }
      result.pollutants = station.pollutants.filter((pollutant) => {
        return pollutantsIDs.includes(+pollutant.id)
      })
    }

    return result
  }

  extractStationData (id, point) {
    let values = []

    let pollutant = POLLUTANTS[+point.magnitud] ? POLLUTANTS[+point.magnitud] : undefined

    for (let i = 0; i < 24; i++) {
      let id = this.padNumber(i + 1) 

      let valid = point[`V${id}`] === 'V'
      values[i] = valid ? +point[`H${id}`] : undefined
    }

    values = values.filter((x) => {
      return x !== undefined
    })

    if (pollutant.scoring) {
      let lastValue = values[values.length - 1]
      let time = values.length
      let scoring = this.pickScoring(lastValue, pollutant.scoring)

      let quality = {
        scoring,
        lastValue,
        time
      }

      return { ...pollutant, values, quality }
    }

    return { ...pollutant, values }
  }

  extractData (airData) {
    return new Promise((resolve, reject) => {
      let json = {}

      try {
        json = parser.toJson(airData)
      } catch (error) {
        console.error(error)
        return reject(error)
      }

      let data = JSON.parse(json).Datos.Dato_Horario

      let stations = {}
      let pollutants = {}

      data.forEach((point) => {
        let id = +point.estacion

        if (!stations[id]) {
          stations[id] = {}
        }

        if (!pollutants[id]) {
          pollutants[id] = []
        }

        pollutants[id].push(this.extractStationData(id, point))

        stations[id] = {
          ...STATIONS[id],
          pollutants: pollutants[id]
        }
      })

      resolve(stations)
    })
  }
}
