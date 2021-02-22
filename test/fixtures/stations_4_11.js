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
        quality: {
          scoring: { name: 'bien', value: 4 },
          lastValue: 51,
          time: 22
        }
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
    ]
  },
  {
    id: '11',
    name: 'Avda. Ramón y Cajal',
    address: 'Avda. Ramón y Cajal  esq. C/ Príncipe de Vergara',
    lng: '-3.6773491',
    lat: '40.4514734',
    pollutants: [
      {
        id: '7',
        name: 'Monóxido de Nitrógeno',
        values: [
           3,  3,  1,  1,  1, 1,  1,
           6, 19, 12, 11, 12, 9,  8,
           6,  5,  4,  5,  7, 8, 14,
          11
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
          56, 52, 22, 16, 13, 35, 44,
          59, 65, 47, 36, 31, 30, 26,
          24, 20, 20, 29, 43, 48, 67,
          75
        ],
        quality: {
          scoring: { name: 'bien', value: 4 },
          lastValue: 75,
          time: 22
        }
      },
      {
        id: '12',
        name: 'Óxidos de Nitrógeno',
        values: [
          60, 56, 24, 18, 15, 36, 46,
          67, 94, 66, 52, 50, 43, 39,
          33, 29, 25, 37, 53, 61, 89,
          92
        ]
      },
      {
        id: '20',
        name: 'Tolueno',
        values: [
          5.5, 2.5, 2.1, 0.9,   1,   1,
          1.2, 1.3, 1.5, 1.4, 1.2, 2.4,
          1.5, 2.3, 3.1,   1, 0.6,   1,
          1.1, 1.8, 2.6, 2.7
        ]
      },
      {
        id: '30',
        name: 'Benceno',
        values: [
          0.6, 0.2, 0.3, 0.2, 0.2,
          0.2, 0.4, 0.4, 0.6, 0.3,
          0.2, 0.3, 0.3, 0.3, 0.3,
          0.2, 0.3, 0.3, 0.3, 0.4,
          0.5, 0.6
        ]
      },
      {
        id: '35',
        name: 'Etilbenceno',
        values: [
          0.6, 0.3, 0.1, 0.1, 0.1,
          0.1, 0.1, 0.1, 0.1, 0.1,
          0.2, 0.3, 0.1, 0.1, 0.1,
          0.1, 0.1, 0.1, 0.1, 0.2,
          0.3, 0.2
        ]
      }
    ]
  }
]
