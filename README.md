# aire-madrid

Node package to get information about Madrid's air quality.

## Installation

`yarn add aire-madrid`

or

`npm install aire-madrid`

### How to use it 

Get reading from 'Monóxido de Nitrógeno' at station 58.

```js
const air = require('aire-madrid')

air.getStations().then((data) => {
  console.log(data[58].magnitudes[7])
})
```

```js
{
  name: 'Monóxido de Nitrógeno',
  values: [
    '1',  '1',  '1',  '1',  '1',
    '1',  '2',  '2',  '7',  '11',
    '-1', '-1', '-1', '-1', '-1',
    '-1', '-1', '-1', '-1', '-1',
    '-1', '-1', '-1', '-1'
  ]
}
```

Get all readings from station 58.

```js
const air = require('aire-madrid')

air.getStations().then((data) => {
  console.log(data[58])
})
```
```js
{
  station: {
    name: 'El Pardo',
    address: 'Avda. La Guardia',
    lng: '-3.7746101',
    lat: '40.5180701'
  },
  magnitudes: {
    '7': { name: 'Monóxido de Nitrógeno', values: [Array] },
    '8': { name: 'Dióxido de Nitrógeno', values: [Array] },
    '12': { name: 'Óxidos de Nitrógeno', values: [Array] },
    '14': { name: 'Ozono', values: [Array] }
  }
}
```

### Legend

| Magnitude   | Code                                |
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

- [ ] Add magnitudes metadata (units, abbreviations, etc.)
- [ ] Add more methods to get readings
- [ ] Add method to get an air quality score
- [ ] Improve documentation with examples

### DONE

- [x] Add stations metadata (lng, lat, address, etc.)
