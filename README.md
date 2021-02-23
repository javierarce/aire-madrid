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

#### Get the list of pollutants

```js
const air = require('aire-madrid')

air.getPollutants().then((data) => {
  console.log(data)
})
```

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

### Pollutant ids

Use the following ids to get readings about each pollutant.

| ID          | Name                                |
| ----------- |-------------------------------------|
| 1           | Dióxido de Azufre                   |
| 6           | Monóxido de Carbono                 |
| 7           | Monóxido de Nitrógeno               |
| 8           | Dióxido de Nitrógeno                |
| 9           | Partículas < 2.5 µm                 |
| 10          | Partículas < 10 µm                  |
| 12          | Óxidos de Nitrógeno                 |
| 14          | Ozono                               |
| 20          | Tolueno                             |
| 30          | Benceno                             |
| 35          | Etilbenceno                         |
| 37          | Metaxileno                          |
| 38          | Paraxileno                          |
| 39          | Ortoxileno                          |
| 42          | Hidrocarburos totales (hexano)      |
| 43          | Metano                              |
| 44          | Hidrocarburos no metánicos (hexano) |

### How is the quality index calculated

| ID | Pollutant            | Very good (5) | Good (4) | Regular (3) | Bad (2) | Very bad  (1) |
| ---|----------------------|---------------|----------|-------------|---------|---------------|
| 9  | Partículas < 2.5 µm  | 0-10          | 11-20    | 21-25       | 26-50   | 51-800        |
| 10 | Partículas < 10 µm   | 0-20          | 21-35    | 36-50       | 51-100  | 101-1200      |
| 8  | Dióxido de Nitrógeno | 0-40          | 41-100   | 101-200     | 201-400 | 401-1000      |
| 14 | Ozono                | 0-80          | 81-120   | 121-180     | 181-240 | 241-600       |
| 1  | Dióxido de Azufre    | 0-100         | 101-200  | 201-350     | 351-500 | 501-1250      |

[Source for the table](http://www.mambiente.madrid.es/opencms/export/sites/default/calaire/Anexos/indice_ca.pdf)

### Data sources

- [Air quality readings](https://datos.madrid.es/sites/v/index.jsp?vgnextoid=41e01e007c9db410VgnVCM2000000c205a0aRCRD&vgnextchannel=374512b9ace9f310VgnVCM100000171f5a0aRCRD).
- [Stations](https://datos.madrid.es/sites/v/index.jsp?vgnextoid=2ac5be53b4d2b610VgnVCM2000001f4a900aRCRD&vgnextchannel=374512b9ace9f310VgnVCM100000171f5a0aRCRD).

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
