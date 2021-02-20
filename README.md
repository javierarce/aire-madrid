# aire-madrid

NPM package to get hourly readings from Madrid's air quality. WIP.

### How to use it 

```
const air = require('aire-madrid')

air.getStations().then((data) => {
  // Get reading from 'Monóxido de Nitrógeno' at station 58
  console.log(data[58].magnitudes[7])

  // Get all readings from station 58
  console.log(data[58])
})
```

### TODO

- [] Add stations metadata (lng, lat, address, etc.)
- [] Add magnitudes metadata (units, abbreviations, etc.)
- [] Add more methods to get readings
- [] Add method to get an air quality score
- [] Improve documentation with examples
