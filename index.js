'use strict'

const http = require('http')
const parser = require('xml2json')
const fs = require('fs')

const CONFIG = require('./config')
const MAGNITUDES = require('./data/magnitudes')
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

  getMagnitudes () {
    return new Promise((resolve, reject) => {
      try {
        let response = this.getArrayFromHash(MAGNITUDES)
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

        if (options.station) {
          let result = this.filterByStation(stations, options.station, options.magnitudes)
          return resolve(result)
        }

        if (options.stations) {
          let result = []

          options.stations.forEach((stationID) => {
            result.push(this.filterByStation(stations, stationID, options.magnitudes))
          })

          resolve(result)
        }
      })
    })
  }

  filterByStation (stations, stationID, magnitudesIDs) {
    let station = stations[stationID]
    let result = station

    if (magnitudesIDs && magnitudesIDs.length) {

      result = { ...station }
      result.magnitudes = station.magnitudes.filter((magnitude) => {
        return magnitudesIDs.includes(+magnitude.id)
      })
    }

    return result
  }

  extractStationData (id, point) {
    let values = []

    let magnitude = MAGNITUDES[+point.magnitud] ? MAGNITUDES[+point.magnitud] : undefined

    for (let i = 0; i < 24; i++) {
      let id = this.padNumber(i + 1) 

      let valid = point[`V${id}`] === 'V'
      values[i] = valid ? point[`H${id}`] : '-1'
    }

    return { ...magnitude, values }
  }

  extractData (airData) {
    return new Promise((resolve, reject) => {
      let json = {}

      try {
        json = parser.toJson(airData)
      } catch (error) {
        return reject(error)
      }

      let data = JSON.parse(json).Datos.Dato_Horario

      let stations = {}
      let magnitudes = {}

      data.forEach((point) => {
        let id = +point.estacion

        if (!stations[id]) {
          stations[id] = {}
        }

        if (!magnitudes[id]) {
          magnitudes[id] = []
        }

        magnitudes[id].push(this.extractStationData(id, point))

        stations[id] = {
          ...STATIONS[id],
          magnitudes: magnitudes[id]
        }
      })

      resolve(stations)
    })
  }
}
