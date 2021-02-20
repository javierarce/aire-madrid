'use strict'

const http = require('http')
const parser = require('xml2json')

const CONFIG = require('../config')
const MAGNITUDES = require('../data/magnitudes')
const STATIONS = require('../data/stations')

module.exports = class Air {
  getStations() {
    const options = {
      headers: { 'Accept': 'application/xml' },
      method: 'GET',
      hostname: CONFIG.host,
      path: CONFIG.path
    }

    return new Promise((resolve, reject) => {
      const req = http.request(options, res => {
        let data = []

        res.on('data', (content) => {
          data+=content
        })

        res.on('end', () => {
          resolve(this.extractData(data))
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
    return new Promise((resolve) => {
      let json = parser.toJson(airData)
      let data = JSON.parse(json).Datos.Dato_Horario

      let stations = {}
      let magnitudes = {}

      data.forEach((point) => {
        let id = +point.estacion

        if (!stations[id]) {
          stations[id] = {}
        }

        if (!magnitudes[id]) {
          magnitudes[id] = {}
        }

        magnitudes[id][+point.magnitud] = this.extractStationData(id, point)

        stations[id] = {
          station: STATIONS[id],
          magnitudes: magnitudes[id]
        }
      })
      resolve(stations)
    })
  }
}
