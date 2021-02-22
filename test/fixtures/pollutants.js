module.exports = [
  {
    id: '1',
    name: 'Dióxido de Azufre',
    scoring: [
      { value: 5, name: 'muy bien', range: [ 0, 100 ] },
      { value: 4, name: 'bien', range: [ 101, 200 ] },
      { value: 3, name: 'regular', range: [ 201, 350 ] },
      { value: 2, name: 'mal', range: [ 351, 500 ] },
      { value: 1, name: 'muy mal', range: [ 501, 1250 ] }
    ]
  },
  { id: '6', name: 'Monóxido de Carbono' },
  { id: '7', name: 'Monóxido de Nitrógeno' },
  {
    id: '8',
    name: 'Dióxido de Nitrógeno',
    scoring: [
      { value: 5, name: 'muy bien', range: [ 0, 40 ] },
      { value: 4, name: 'bien', range: [ 41, 100 ] },
      { value: 3, name: 'regular', range: [ 101, 200 ] },
      { value: 2, name: 'mal', range: [ 201, 400 ] },
      { value: 1, name: 'muy mal', range: [ 401, 1000 ] }
    ]
  },
  {
    id: '9',
    name: 'Partículas < 2.5 µm',
    scoring: [
      { value: 5, name: 'muy bien', range: [ 0, 10 ] },
      { value: 4, name: 'bien', range: [ 11, 20 ] },
      { value: 3, name: 'regular', range: [ 21, 25 ] },
      { value: 2, name: 'mal', range: [ 26, 50 ] },
      { value: 1, name: 'muy mal', range: [ 51, 800 ] }
    ]
  },
  {
    id: '10',
    name: 'Partículas < 10 µm',
    scoring: [
      { value: 5, name: 'muy bien', range: [ 0, 20 ] },
      { value: 4, name: 'bien', range: [ 21, 35 ] },
      { value: 3, name: 'regular', range: [ 36, 50 ] },
      { value: 2, name: 'mal', range: [ 51, 100 ] },
      { value: 1, name: 'muy mal', range: [ 101, 1200 ] }
    ]
  },
  { id: '12', name: 'Óxidos de Nitrógeno' },
  {
    id: '14',
    name: 'Ozono',
    scoring: [
      { value: 5, name: 'muy bien', range: [ 0, 80 ] },
      { value: 4, name: 'bien', range: [ 81, 120 ] },
      { value: 3, name: 'regular', range: [ 121, 180 ] },
      { value: 2, name: 'mal', range: [ 181, 240 ] },
      { value: 1, name: 'muy mal', range: [ 241, 600 ] }
    ]
  },
  { id: '20', name: 'Tolueno' },
  { id: '30', name: 'Benceno' },
  { id: '35', name: 'Etilbenceno' },
  { id: '37', name: 'Metaxileno' },
  { id: '38', name: 'Paraxileno' },
  { id: '39', name: 'Ortoxileno' },
  { id: '42', name: 'Hidrocarburos totales (hexano)' },
  { id: '43', name: 'Metano' },
  { id: '44', name: 'Hidrocarburos no metánicos (hexano)' }
]
