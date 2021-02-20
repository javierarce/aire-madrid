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
  station: { name: 'El Pardo' },
  magnitudes: {
    '7': { name: 'Monóxido de Nitrógeno', values: [Array] },
    '8': { name: 'Dióxido de Nitrógeno', values: [Array] },
    '12': { name: 'Óxidos de Nitrógeno', values: [Array] },
    '14': { name: 'Ozono', values: [Array] }
  }
}
```

### Data sources

- [Air quality readings](https://datos.madrid.es/sites/v/index.jsp?vgnextoid=41e01e007c9db410VgnVCM2000000c205a0aRCRD&vgnextchannel=374512b9ace9f310VgnVCM100000171f5a0aRCRD).
- [Stations](https://datos.madrid.es/sites/v/index.jsp?vgnextoid=2ac5be53b4d2b610VgnVCM2000001f4a900aRCRD&vgnextchannel=374512b9ace9f310VgnVCM100000171f5a0aRCRD).

### TODO

- [ ] Add stations metadata (lng, lat, address, etc.)
- [ ] Add magnitudes metadata (units, abbreviations, etc.)
- [ ] Add more methods to get readings
- [ ] Add method to get an air quality score
- [ ] Improve documentation with examples
