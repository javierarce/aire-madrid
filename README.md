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
