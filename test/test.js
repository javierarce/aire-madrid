'use strict'

const fs = require('fs')
const chai = require('chai')
const nock = require('nock')
const expect = require('chai').expect
 
const FIXTURES = require('./fixtures')
const STATIONS = require('../data/stations')
const MAGNITUDES = require('../data/magnitudes')

const Air = require('../index')
const air = new Air()

const CONFIG = require('../config')
const URL = `http://${CONFIG.host}`
const PATH = CONFIG.path

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
    expect(result).to.deep.equal(STATIONS)
  })

  it('should return the list of magnitudes', async () => {
    let result = await air.getMagnitudes()
    expect(result).to.deep.equal(MAGNITUDES)
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
    let result = await air.getReadings({ station: 57, magnitudes: [1] })
    expect(result).to.deep.equal(FIXTURES.station_57_1)
  })

  it('should return data for a given station and existing magnitudes', async () => {
    let result = await air.getReadings({ station: 57, magnitudes: [1, 99, 666] })
    expect(result).to.deep.equal(FIXTURES.station_57_1)
  })

  it('should return data for several stations and magnitudes', async () => {
    let result = await air.getReadings({ stations: [4, 16], magnitudes: [1, 9, 6, 8] })
    expect(result).to.deep.equal(FIXTURES.station_mix)
  })
})
