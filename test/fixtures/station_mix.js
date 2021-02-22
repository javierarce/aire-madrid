module.exports = [{
  id: '4',
  name: 'Pza. de España',
  address: 'Plaza de España',
  lng: '-3.7122567',
  lat: '40.4238823',
  pollutants: [
    {
      id: '1',
      name: 'Dióxido de Azufre',
      scoring: [
        { name: 'muy bien', range: [ 0, 100 ] },
        { name: 'bien', range: [ 101, 200 ] },
        { name: 'regular', range: [ 201, 350 ] },
        { name: 'mal', range: [ 351, 500 ] },
        { name: 'muy mal', range: [ 501, 1250 ] }
      ],
      values: [
        '13', '11', '10', '9',  '8',
        '7',  '7',  '8',  '11', '10',
        '7',  '8',  '10', '8',  '8',
        '8',  '8',  '8',  '9',  '10',
        '10', '12', '-1', '-1'
      ]
    },
    {
      id: '6',
      name: 'Monóxido de Carbono',
      values: [
        '0.5', '0.4', '0.4', '0.3',
        '0.3', '0.3', '0.3', '1.1',
        '1.5', '1.4', '0.3', '0.2',
        '0.2', '0.3', '0.2', '0.2',
        '0.2', '0.2', '0.3', '0.3',
        '0.3', '0.4', '-1',  '-1'
      ]
    },
    {
      id: '8',
      name: 'Dióxido de Nitrógeno',
      scoring: [
        { name: 'muy bien', range: [ 0, 40 ] },
        { name: 'bien', range: [ 41, 100 ] },
        { name: 'regular', range: [ 101, 200 ] },
        { name: 'mal', range: [ 201, 400 ] },
        { name: 'muy mal', range: [ 401, 1000 ] }
      ],
      values: [
        '47', '40', '34', '28', '25',
        '24', '23', '29', '53', '56',
        '43', '26', '26', '23', '14',
        '11', '9',  '14', '28', '32',
        '34', '51', '-1', '-1'
      ]
    }
  ]
},
  {
    id: '16',
    name: 'Arturo Soria',
    address: 'C/ Arturo Soria  esq. C/  Vizconde de los Asilos ',
    lng: '-3.6392422',
    lat: '40.4400457',
    pollutants: [
      {
        id: '8',
        name: 'Dióxido de Nitrógeno',
        scoring: [
          { name: 'muy bien', range: [ 0, 40 ] },
          { name: 'bien', range: [ 41, 100 ] },
          { name: 'regular', range: [ 101, 200 ] },
          { name: 'mal', range: [ 201, 400 ] },
          { name: 'muy mal', range: [ 401, 1000 ] }
        ],
        values: [
          '46', '42', '21', '15',
          '33', '51', '48', '45',
          '57', '48', '26', '20',
          '16', '14', '14', '14',
          '12', '21', '26', '42',
          '56', '55', '-1', '-1'
        ]
      }
    ]
  }
]
