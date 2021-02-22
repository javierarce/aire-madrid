module.exports = {
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
        '10', '12', undefined, undefined
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
        '0.3', '0.4', undefined,  undefined
      ]
    },
    {
      id: '7',
      name: 'Monóxido de Nitrógeno',
      values: [
        '45', '28', '17', '15',  '8',
        '6',  '11', '34', '133', '109',
        '17', '7',  '9',  '7',   '2',
        '2',  '1',  '1',  '2',   '2',
        '1',  '2',  undefined, undefined
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
        '34', '51', undefined, undefined
      ]
    },
    {
      id: '12',
      name: 'Óxidos de Nitrógeno',
      values: [
        '115', '82',  '60', '50',
        '38',  '34',  '39', '81',
        '257', '223', '70', '37',
        '40',  '34',  '17', '14',
        '10',  '15',  '30', '35',
        '36',  '55',  undefined, undefined
      ]
    }
  ]
}
