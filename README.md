# aire-madrid

Node package to get information about Madrid's air quality.

[![Build Status](https://travis-ci.com/javierarce/aire-madrid.svg?branch=main)](https://travis-ci.com/javierarce/aire-madrid)

## Installation

`yarn add aire-madrid`

or

`npm install aire-madrid`

### How to use it 

#### Get readings from 'Monóxido de Nitrógeno' & 'Partículas < 2.5 µm' at stations 8 and 11.

Notice that the station 11 ('Avda. Ramón y Cajal') doesn't provide readings of 'Partículas < 2.5 µm'.

```js
const air = require('aire-madrid')

air.getReadings({ stations: [8, 11], pollutants: [7, 9]}).then((data) => {
  console.log(data)
})
```

```js
[
  {
    id: '8',
    name: 'Escuelas Aguirre',
    address: 'Entre C/ Alcalá y C/ O\x92 Donell ',
    lng: '-3.6823158',
    lat: '40.4215533',
    pollutants: [
      {
        id: '7',
        name: 'Monóxido de Nitrógeno',
        values: [
          '22', '11', '4',  '2',  '2',
          '2',  '3',  '5',  '10', '10',
          '7',  '4',  '3',  '3',  '3',
          '2',  '2',  '3',  '3',  '4',
          '4',  '9',  '-1', '-1'
        ]
      },
      {
        id: '9',
        name: 'Partículas < 2.5 µm',
        values: [
          '14', '14', '11', '5',  '6',
          '9',  '7',  '5',  '10', '12',
          '15', '11', '11', '11', '8',
          '12', '13', '19', '17', '17',
          '25', '30', '-1', '-1'
        ]
      }
    ]
  },
  {
    id: '11',
    name: 'Avda. Ramón y Cajal',
    address: 'Avda. Ramón y Cajal  esq. C/ Príncipe de Vergara',
    lng: '-3.6773491',
    lat: '40.4514734',
    pollutants: [
      {
        id: '7',
        name: 'Monóxido de Nitrógeno',
        values: [
          '3',  '3',  '1',  '1',  '1',
          '1',  '1',  '6',  '19', '12',
          '11', '12', '9',  '8',  '6',
          '5',  '4',  '5',  '7',  '8',
          '14', '11', '-1', '-1'
        ]
      }
    ]
  }
]
```

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

air.getpollutants().then((data) => {
  console.log(data)
})
```

```js
[
  { id: '1', name: 'Dióxido de Azufre' },
  { id: '6', name: 'Monóxido de Carbono' },
  …
  { id: '43', name: 'Metano' },
  { id: '44', name: 'Hidrocarburos no metánicos (hexano)' }
]
```

### Legend

| pollutant   | Code                                |
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

### Data sources

- [Air quality readings](https://datos.madrid.es/sites/v/index.jsp?vgnextoid=41e01e007c9db410VgnVCM2000000c205a0aRCRD&vgnextchannel=374512b9ace9f310VgnVCM100000171f5a0aRCRD).
- [Stations](https://datos.madrid.es/sites/v/index.jsp?vgnextoid=2ac5be53b4d2b610VgnVCM2000001f4a900aRCRD&vgnextchannel=374512b9ace9f310VgnVCM100000171f5a0aRCRD).

### TODO

- [ ] Add pollutants metadata (units, abbreviations, etc.)
- [ ] Add method to get an air quality score

### DONE

- [x] Find a better name than 'magnitude'
- [x] Return data in the form of an array
- [x] Add tests
- [x] Add more methods to get readings
- [x] Improve documentation with examples
- [x] Add stations metadata (lng, lat, address, etc.)
