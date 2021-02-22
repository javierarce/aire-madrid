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
        { value: 5, name: 'muy bien', range: [ 0, 100 ] },
        { value: 4, name: 'bien', range: [ 101, 200 ] },
        { value: 3, name: 'regular', range: [ 201, 350 ] },
        { value: 2, name: 'mal', range: [ 351, 500 ] },
        { value: 1, name: 'muy mal', range: [ 501, 1250 ] }
      ],
      values: [
        13, 11, 10, 9, 8,  7,  7,
        8, 11, 10, 7, 8, 10,  8,
        8,  8,  8, 8, 9, 10, 10,
        12
      ],
      quality: {
        scoring: { name: 'muy bien', value: 5 },
        lastValue: 12,
        time: 22
      }
    },
    {
      id: '6',
      name: 'Monóxido de Carbono',
      values: [
        0.5, 0.4, 0.4, 0.3, 0.3,
        0.3, 0.3, 1.1, 1.5, 1.4,
        0.3, 0.2, 0.2, 0.3, 0.2,
        0.2, 0.2, 0.2, 0.3, 0.3,
        0.3, 0.4
      ]
    },
    {
      id: '7',
      name: 'Monóxido de Nitrógeno',
      values: [
        45,  28,  17, 15, 8, 6, 11,
        34, 133, 109, 17, 7, 9,  7,
        2,   2,   1,  1, 2, 2,  1,
        2
      ]
    },
    {
      id: '8',
      name: 'Dióxido de Nitrógeno',
      scoring: [
        { value: 5, name: 'muy bien', range: [ 0, 40 ] },
        { value: 4, name: 'bien', range: [ 41, 100 ] },
        { value: 3, name: 'regular', range: [ 101, 200 ] },
        { value: 2, name: 'mal', range: [ 201, 400 ] },
        { value: 1, name: 'muy mal', range: [ 401, 1000 ] }
      ],
      values: [
        47, 40, 34, 28, 25, 24, 23,
        29, 53, 56, 43, 26, 26, 23,
        14, 11,  9, 14, 28, 32, 34,
        51
      ],
      quality: { scoring: { name: 'bien', value: 4 }, lastValue: 51, time: 22 }
    },
    {
      id: '12',
      name: 'Óxidos de Nitrógeno',
      values: [
        115,  82,  60, 50, 38, 34, 39,
        81, 257, 223, 70, 37, 40, 34,
        17,  14,  10, 15, 30, 35, 36,
        55
      ]
    }
  ],
  qualityIndex: 4
}
