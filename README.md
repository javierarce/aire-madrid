# aire-madrid

Node package to get information about Madrid's air quality.

## Installation

`yarn add aire-madrid`

or

`npm install aire-madrid`

### How to use it 

Get reading from 'Monóxido de Nitrógeno' & 'Partículas < 2.5 µm' at stations 4 and 11.

```js
const air = require('aire-madrid')

air.getReadings({ stations: [4, 11], magnitudes: [7, 9]}).then((data) => {
  console.log(data)
})
```

```js
{
  '4': {
    station: {
      name: 'Pza. de España',
      address: 'Plaza de España',
      lng: '-3.7122567',
      lat: '40.4238823'
    },
    magnitudes: {
      '7': {
        name: 'Monóxido de Nitrógeno',
        values: [
          '45', '28', '17', '15',  '8',
          '6',  '11', '34', '133', '109',
          '17', '7',  '9',  '7',   '2',
          '2',  '1',  '1',  '2',   '2',
          '1',  '2',  '-1', '-1'
        ]
      }
    }
  },
  '11': {
    station: {
      name: 'Avda. Ramón y Cajal',
      address: 'Avda. Ramón y Cajal  esq. C/ Príncipe de Vergara',
      lng: '-3.6773491',
      lat: '40.4514734'
    },
    magnitudes: {
      '7': {
        name: 'Monóxido de Nitrógeno',
        values: [
          '3',  '3',  '1',  '1',  '1',
          '1',  '1',  '6',  '19', '12',
          '11', '12', '9',  '8',  '6',
          '5',  '4',  '5',  '7',  '8',
          '14', '11', '-1', '-1'
        ]
      }
    }
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

### DONE

- [x] Add tests
- [x] Improve documentation with examples
- [x] Add stations metadata (lng, lat, address, etc.)
