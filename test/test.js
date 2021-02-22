'use strict'

const fs = require('fs')
const chai = require('chai')
const nock = require('nock')
const expect = require('chai').expect
 
const Air = require('../index')
const air = new Air()

const CONFIG = require('../config')
const URL = `http://${CONFIG.host}`
const PATH = CONFIG.path

const FIXTURES = {
  stations: require('./fixtures/stations'),
  magnitudes: require('./fixtures/magnitudes'),
  all: require('./fixtures/all'),
  station_4: require('./fixtures/station_4'),
  station_4_11: require('./fixtures/stations_4_11'),
  station_57_1: require('./fixtures/station_57_1'),
  station_57_1_99_666: require('./fixtures/station_57_1_99_666'),
  station_mix: require('./fixtures/station_mix')
}

describe('Readings', () => {
  beforeEach(() => {
    nock(URL)
      .get(PATH)
      .reply(200, fs.readFileSync(`${__dirname}/horario.xml`));
  })

  it('should return all the readings', async () => {
    let result = await air.getReadings()
    expect(result).to.deep.equal(FIXTURES.all)
  })

  it('should return the list of stations', async () => {
    let result = await air.getStations()
    expect(result).to.deep.equal(FIXTURES.stations)
  })

  it('should return the list of magnitudes', async () => {
    let result = await air.getMagnitudes()
    expect(result).to.deep.equal(FIXTURES.magnitudes)
  })

  it('should return data for a given station', async () => {
    let result = await air.getReadings({ station: 4 })
    expect(result).to.deep.equal(FIXTURES.station_4)
  })

  it('should return data for several stations', async () => {
    let result = await air.getReadings({ stations: [4, 11] })
    expect(result).to.deep.equal(FIXTURES.station_4_11)
  })

  it('should return data for a given station and a magnitude', async () => {
    let result = await air.getReadings({ station: 57, magnitude: 1 })
    expect(result).to.deep.equal(FIXTURES.station_57_1)
  })

  it('should return data for a given station and existing magnitudes', async () => {
    let result = await air.getReadings({ station: 57, magnitudes: [1, 99, 666] })
    expect(result).to.deep.equal(FIXTURES.station_57_1_99_666)
  })

  it('should return data for several stations and magnitudes', async () => {
    let result = await air.getReadings({ stations: [4, 16], magnitudes: [1, 9, 6, 8] })
    expect(result).to.deep.equal(FIXTURES.station_mix)
  })
})
