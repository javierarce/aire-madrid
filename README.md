# aire-madrid

NPM package to get hourly readings from Madrid's air quality. WIP.

### How to use it 

```js
const air = require('aire-madrid')

air.getStations().then((data) => {
  // Get reading from 'Monóxido de Nitrógeno' at station 58
  console.log(data[58].magnitudes[7])

  // Get all readings from station 58
  console.log(data[58])
})
```

### Results

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

### TODO

- [] Add stations metadata (lng, lat, address, etc.)
- [] Add magnitudes metadata (units, abbreviations, etc.)
- [] Add more methods to get readings
- [] Add method to get an air quality score
- [] Improve documentation with examples
