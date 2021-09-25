'use strict'
const util = require('util')

const https = require('https')
const parser = require('fast-xml-parser')
const fs = require('fs')

const CONFIG = require('./config')
const POLLUTANTS = require('./data/pollutants')
const STATIONS = require('./data/stations')

class Air {
  constructor () {
    this.stations = []
  }

  loadDataFromXML(source) {
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
        let data = fs.readFileSync(this.source, "utf8").toString()
        return resolve(this.extractData(data))
      }

      const req = https.request(options, res => {
        let data = []

        res.on('data', (content) => {
          data += content
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

  getStationIndex (pollutants) {
    const method = (result, pollutant) => {
      let score = pollutant.quality && pollutant.quality.scoring && pollutant.quality.scoring.value
      return (score && result.push(score), result)
    }

    let values = pollutants.reduce(method, [])
    return Math.min(...values)
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

        this.stations = stations
        
        if (options == undefined) {
          let result = this.getArrayFromHash(this.stations)

          result.forEach((station) => {
            station.qualityIndex = this.getStationIndex(station.pollutants)
          })

          return resolve(result)
        } 

        let pollutants = options.pollutants

        if (options.pollutant) {
          pollutants = [options.pollutant]
        }

        if (options.station) {
          let result = this.filterByStation(options.station, pollutants)
          return resolve(result)
        }

        if (options.stations) {
          let result = []

          options.stations.forEach((stationID) => {
            result.push(this.filterByStation(stationID, pollutants))
          })

          resolve(result)
        }
      })
    })
  }

  filterByStation (stationID, pollutantsIDs) {
    let station = this.stations[stationID]
    let result = station

    if (pollutantsIDs && pollutantsIDs.length) {
      result = { ...station }
      result.pollutants = station.pollutants.filter((pollutant) => {
        return pollutantsIDs.includes(+pollutant.id)
      })
    }

    result.qualityIndex = this.getStationIndex(station.pollutants)

    return result
  }

  extractStationData (id, point) {
    let values = []
    let error = undefined

    let pollutant = POLLUTANTS[+point.magnitud] ? POLLUTANTS[+point.magnitud] : undefined

    let lastValidValueIndex = 0

    for (let i = 0; i < 24; i++) {
      let id = this.padNumber(i + 1) 

      let valid = point[`V${id}`] === 'V'
      values[i] = valid ? +point[`H${id}`] : undefined

      if (valid) {
        lastValidValueIndex = i
      }
    }

    values = values.filter((x) => {
      return x !== undefined
    })

    if (values.length === 0) {
      error = 'This station is not returning any readings'
    } 

    let result = { ...pollutant, values }

    if (pollutant.scoring && values.length) {
      let lastValue = values[values.length - 1]
      let time = values.length
      let scoring = this.pickScoring(lastValue, pollutant.scoring)

      let quality = {
        scoring,
        lastValue,
        time
      }

      result = { ...pollutant, values, quality }
    }

    if (error) {
      result.error = error
    }

    return result
  }

  extractData (airData) {
    return new Promise((resolve, reject) => {
      let json = {}

      try {
        json = parser.parse(airData)
      } catch (error) {
        console.error(error)
        return reject(error)
      }

      let data = json.Datos.Dato_Horario

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

module.exports = new Air()
