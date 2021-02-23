# aire-madrid

Node package to get information about Madrid's air quality.

[![Build Status](https://travis-ci.com/javierarce/aire-madrid.svg?branch=main)](https://travis-ci.com/javierarce/aire-madrid)

## Installation

`yarn add aire-madrid`

or

`npm install aire-madrid`

### Usage examples

#### Get readings from 'Monóxido de Nitrógeno' & 'Partículas < 2.5 µm' at stations 8 and 11.

```js
const air = require('aire-madrid')

air.getReadings({ stations: [8, 11], pollutants: [7, 9]}).then((data) => {
  console.log(data)
})
```
<details>
  <summary>See output</summary>
  
```js
[{
    id: '8',
    name: 'Escuelas Aguirre',
    address: 'Entre C/ Alcalá y C/ O\x92 Donell ',
    lng: '-3.6823158',
    lat: '40.4215533',
    pollutants: [{
      id: '7',
      name: 'Monóxido de Nitrógeno',
      values: [ 22, 11, 4, 2, 2, 2, 3, 5, 10, 10, 7, 
                4, 3, 3, 3,  2, 2, 3, 3, 4, 4, 9 ]
    }, {
      id: '9',
      name: 'Partículas < 2.5 µm',
      scoring: [
        { value: 5, name: 'muy bien', range: [ 0, 10 ] },
        { value: 4, name: 'bien', range: [ 11, 20 ] },
        { value: 3, name: 'regular', range: [ 21, 25 ] },
        { value: 2, name: 'mal', range: [ 26, 50 ] },
        { value: 1, name: 'muy mal', range: [ 51, 800 ] }
      ],
      values: [ 14, 14, 11, 5, 6, 9, 7, 5, 10, 12, 15, 11, 
                11, 11, 8, 12, 13, 19, 17, 17, 25, 30 ],
      quality: { scoring: { name: 'mal', value: 2 }, lastValue: 30, time: 22 }
    }],
    qualityIndex: 2
  }, {
  …
```
</details>

- The first value in the `values` array corresponds to the 1 AM of the current day.
- Not all the stations provide information about all the pollutants.
- For [these pollutants](#how-is-the-quality-index-calculated) a scoring is offered.

#### Get the list of stations

```js
const air = require('aire-madrid')

air.getStations().then((data) => {
  console.log(data)
})
```
<details>
  <summary>See output</summary>
```js
[
  {
    id: '4',
    name: 'Pza. de España',
    address: 'Plaza de España',
    lng: '-3.7122567',
    lat: '40.4238823'
  },
  {
    id: '8',
    name: 'Escuelas Aguirre',
    address: 'Entre C/ Alcalá y C/ O\x92 Donell ',
    lng: '-3.6823158',
    lat: '40.4215533'
  },
  …
```
</details>

#### Get the list of pollutants

```js
const air = require('aire-madrid')

air.getPollutants().then((data) => {
  console.log(data)
})
```

<details>
  <summary>See output</summary>
```js
[
  {
    id: '1',
    name: 'Dióxido de Azufre',
    scoring: [
      { value: 5, name: 'muy bien', range: [ 0, 100 ] },
      { value: 4, name: 'bien', range: [ 101, 200 ] },
      { value: 3, name: 'regular', range: [ 201, 350 ] },
      { value: 2, name: 'mal', range: [ 351, 500 ] },
      { value: 1, name: 'muy mal', range: [ 501, 1250 ] }
    ]
  },
  { id: '6', name: 'Monóxido de Carbono' },
  { id: '7', name: 'Monóxido de Nitrógeno' },
  …
]
```
</details>

### More information

- [Pollutants ids](https://github.com/javierarce/aire-madrid/wiki/pollutants)
- [How is the quality index calculated](https://github.com/javierarce/aire-madrid/wiki/quality-index)
- [Data sources](https://github.com/javierarce/aire-madrid/wiki/data-sources)

### TODO

- [ ] Show information about possible [problems in the stations](https://twitter.com/airedemadrid/status/1364142646382452736)
- [ ] Improve this README.

### DONE

- [x] Add a global quality score for a station
- [x] Add pollutants scoring
- [x] Find a better name than 'magnitude'
- [x] Return data in the form of an array
- [x] Add tests
- [x] Add more methods to get readings
- [x] Improve documentation with examples
- [x] Add stations metadata (lng, lat, address, etc.)
