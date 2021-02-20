const csv = require('csv-parser')
const fs = require('fs')
const iconv = require('iconv-lite')

const results = []

fs.createReadStream(`${ __dirname }/stations.csv`)
  .pipe(iconv.decodeStream('latin1'))
  .pipe(csv({ separator: ';' }))
  .on('data', (data) => results.push(data))
  .on('end', () => {

    let fields = [
      { name: 'ESTACION', prettyName: 'name' },
      { name: 'DIRECCION', prettyName: 'address' },
      { name: 'LONGITUD', prettyName: 'lng' },
      { name: 'LATITUD', prettyName: 'lat' }
    ]

    let rows = {}

    results.forEach((station) => {
      let row = {}

      fields.forEach((field) => {
        row[field.prettyName] = station[field.name]
      })

      rows[+station['CODIGO_CORTO']] = row
    })

    console.log(rows)

  })
