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
  },
  {
    id: '8',
    name: 'Escuelas Aguirre',
    address: 'Entre C/ Alcalá y C/ O\x92 Donell ',
    lng: '-3.6823158',
    lat: '40.4215533',
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
          '3', '3', '3',  '3',  '3',
          '3', '3', '3',  '3',  '3',
          '3', '3', '3',  '3',  '3',
          '3', '3', '3',  '3',  '3',
          '3', '4', undefined, undefined
        ]
      },
      {
        id: '6',
        name: 'Monóxido de Carbono',
        values: [
          '0.4', '0.3', '0.2', '0.2',
          '0.2', '0.2', '0.3', '0.3',
          '0.4', '0.3', '0.3', '0.3',
          '0.3', '0.3', '0.3', '0.3',
          '0.3', '0.3', '0.3', '0.3',
          '0.4', '0.5', undefined,  undefined
        ]
      },
      {
        id: '7',
        name: 'Monóxido de Nitrógeno',
        values: [
          '22', '11', '4',  '2',  '2',
          '2',  '3',  '5',  '10', '10',
          '7',  '4',  '3',  '3',  '3',
          '2',  '2',  '3',  '3',  '4',
          '4',  '9',  undefined, undefined
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
          '50', '43', '28', '21',
          '18', '18', '27', '36',
          '42', '41', '39', '32',
          '28', '26', '23', '20',
          '19', '23', '30', '33',
          '39', '51', undefined, undefined
        ]
      },
      {
        id: '9',
        name: 'Partículas < 2.5 µm',
        scoring: [
          { name: 'muy bien', range: [ 0, 10 ] },
          { name: 'bien', range: [ 11, 20 ] },
          { name: 'regular', range: [ 21, 25 ] },
          { name: 'mal', range: [ 26, 50 ] },
          { name: 'muy mal', range: [ 51, 800 ] }
        ],
        values: [
          '14', '14', '11', '5',  '6',
          '9',  '7',  '5',  '10', '12',
          '15', '11', '11', '11', '8',
          '12', '13', '19', '17', '17',
          '25', '30', undefined, undefined
        ]
      },
      {
        id: '10',
        name: 'Partículas < 10 µm',
        scoring: [
          { name: 'muy bien', range: [ 0, 20 ] },
          { name: 'bien', range: [ 21, 35 ] },
          { name: 'regular', range: [ 36, 50 ] },
          { name: 'mal', range: [ 51, 100 ] },
          { name: 'muy mal', range: [ 101, 1200 ] }
        ],
        values: [
          '37', '32', '20', '12',
          '12', '16', '15', '15',
          '21', '25', '27', '23',
          '23', '23', '22', '27',
          '31', '48', '49', '58',
          '87', '92', undefined, undefined
        ]
      },
      {
        id: '12',
        name: 'Óxidos de Nitrógeno',
        values: [
          '84', '60', '35', '23',
          '20', '20', '31', '45',
          '58', '56', '49', '38',
          '33', '30', '27', '24',
          '23', '27', '34', '39',
          '46', '64', undefined, undefined
        ]
      },
      {
        id: '14',
        name: 'Ozono',
        scoring: [
          { name: 'muy bien', range: [ 0, 80 ] },
          { name: 'bien', range: [ 81, 120 ] },
          { name: 'regular', range: [ 121, 180 ] },
          { name: 'mal', range: [ 181, 240 ] },
          { name: 'muy mal', range: [ 241, 600 ] }
        ],
        values: [
          '11', '19', '44', '46',
          '50', '47', '29', '20',
          '19', '33', '49', '63',
          '72', '81', '81', '84',
          '76', '63', '52', '48',
          '35', '18', undefined, undefined
        ]
      },
      {
        id: '20',
        name: 'Tolueno',
        values: [
          '5.4', '3.9', '2.9', '1.9',
          '1.6', '1.2', '1.3', '2.4',
          '2.5', '2.4', '2.2', '1.9',
          '1.8', '1.8', '1.8', '1.7',
          '1.6', '1.5', '1.6', '1.7',
          '1.8', '2.3', undefined,  undefined
        ]
      },
      {
        id: '30',
        name: 'Benceno',
        values: [
          '1.3', '0.9', '0.7', '0.5',
          '0.4', '0.3', '0.4', '0.6',
          '0.6', '0.7', '0.7', '0.7',
          '0.7', '0.7', '0.7', '0.7',
          '0.7', '0.6', '0.6', '0.6',
          '0.7', '0.8', undefined,  undefined
        ]
      },
      {
        id: '35',
        name: 'Etilbenceno',
        values: [
          '1.5', '1.1', '0.9', '0.7',
          '0.6', '0.5', '0.5', '0.7',
          '0.7', '0.7', '0.7', '0.7',
          '0.8', '1.0', '1.2', '1.1',
          '1.0', '0.8', '0.8', '0.9',
          '1.0', '1.0', undefined,  undefined
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
          '3',  '3',  '1',  '1',  '1',
          '1',  '1',  '6',  '19', '12',
          '11', '12', '9',  '8',  '6',
          '5',  '4',  '5',  '7',  '8',
          '14', '11', undefined, undefined
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
          '56', '52', '22', '16',
          '13', '35', '44', '59',
          '65', '47', '36', '31',
          '30', '26', '24', '20',
          '20', '29', '43', '48',
          '67', '75', undefined, undefined
        ]
      },
      {
        id: '12',
        name: 'Óxidos de Nitrógeno',
        values: [
          '60', '56', '24', '18',
          '15', '36', '46', '67',
          '94', '66', '52', '50',
          '43', '39', '33', '29',
          '25', '37', '53', '61',
          '89', '92', undefined, undefined
        ]
      },
      {
        id: '20',
        name: 'Tolueno',
        values: [
          '5.5', '2.5', '2.1', '0.9',
          '1.0', '1.0', '1.2', '1.3',
          '1.5', '1.4', '1.2', '2.4',
          '1.5', '2.3', '3.1', '1.0',
          '0.6', '1.0', '1.1', '1.8',
          '2.6', '2.7', undefined,  undefined
        ]
      },
      {
        id: '30',
        name: 'Benceno',
        values: [
          '0.6', '0.2', '0.3', '0.2',
          '0.2', '0.2', '0.4', '0.4',
          '0.6', '0.3', '0.2', '0.3',
          '0.3', '0.3', '0.3', '0.2',
          '0.3', '0.3', '0.3', '0.4',
          '0.5', '0.6', undefined,  undefined
        ]
      },
      {
        id: '35',
        name: 'Etilbenceno',
        values: [
          '0.6', '0.3', '0.1', '0.1',
          '0.1', '0.1', '0.1', '0.1',
          '0.1', '0.1', '0.2', '0.3',
          '0.1', '0.1', '0.1', '0.1',
          '0.1', '0.1', '0.1', '0.2',
          '0.3', '0.2', undefined,  undefined
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
        id: '7',
        name: 'Monóxido de Nitrógeno',
        values: [
          '2', '2', '1',  '1',  '5',
          '5', '6', '4',  '27', '12',
          '7', '6', '4',  '4',  '3',
          '3', '2', '3',  '2',  '3',
          '4', '6', undefined, undefined
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
          '46', '42', '21', '15',
          '33', '51', '48', '45',
          '57', '48', '26', '20',
          '16', '14', '14', '14',
          '12', '21', '26', '42',
          '56', '55', undefined, undefined
        ]
      },
      {
        id: '12',
        name: 'Óxidos de Nitrógeno',
        values: [
          '49', '44', '22', '16',
          '41', '58', '56', '52',
          '98', '65', '37', '30',
          '23', '20', '19', '19',
          '15', '26', '30', '46',
          '62', '65', undefined, undefined
        ]
      },
      {
        id: '14',
        name: 'Ozono',
        scoring: [
          { name: 'muy bien', range: [ 0, 80 ] },
          { name: 'bien', range: [ 81, 120 ] },
          { name: 'regular', range: [ 121, 180 ] },
          { name: 'mal', range: [ 181, 240 ] },
          { name: 'muy mal', range: [ 241, 600 ] }
        ],
        values: [
          '20', '20', '36', '41', '23',
          '3',  '4',  '5',  '4',  '22',
          '47', '51', '62', '68', '68',
          '68', '65', '52', '45', '32',
          '19', '18', undefined, undefined
        ]
      }
    ]
  },
  {
    id: '17',
    name: 'Villaverde',
    address: 'C/. Juan Peñalver',
    lng: '-3.7133167',
    lat: '40.347147',
    pollutants: [
      {
        id: '7',
        name: 'Monóxido de Nitrógeno',
        values: [
          '42', '37', '19',  '17',  '27',
          '34', '72', '132', '178', '86',
          '6',  '6',  '4',   '6',   '7',
          '4',  '4',  '6',   '8',   '8',
          '14', '6',  undefined,  undefined
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
          '68', '65', '55', '51',
          '49', '47', '51', '71',
          '78', '61', '21', '20',
          '17', '19', '23', '17',
          '15', '24', '37', '42',
          '61', '64', undefined, undefined
        ]
      },
      {
        id: '12',
        name: 'Óxidos de Nitrógeno',
        values: [
          '133', '121', '83',  '76',
          '90',  '99',  '161', '273',
          '350', '193', '30',  '29',
          '24',  '28',  '34',  '23',
          '21',  '33',  '49',  '54',
          '83',  '72',  undefined,  undefined
        ]
      },
      {
        id: '14',
        name: 'Ozono',
        scoring: [
          { name: 'muy bien', range: [ 0, 80 ] },
          { name: 'bien', range: [ 81, 120 ] },
          { name: 'regular', range: [ 121, 180 ] },
          { name: 'mal', range: [ 181, 240 ] },
          { name: 'muy mal', range: [ 241, 600 ] }
        ],
        values: [
          '2',  '2',  '4',  '3',  '3',
          '2',  '3',  '5',  '4',  '17',
          '57', '64', '78', '84', '81',
          '83', '77', '61', '46', '38',
          '19', '13', undefined, undefined
        ]
      }
    ]
  },
  {
    id: '18',
    name: 'Farolillo',
    address: 'Calle Farolillo - C/Ervigio',
    lng: '-3.7318356',
    lat: '40.3947825',
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
          '11', '9',  '9',  '9',  '9',
          '9',  '9',  '9',  '9',  '10',
          '10', '9',  '9',  '9',  '9',
          '8',  '9',  '9',  '8',  '9',
          '9',  '11', undefined, undefined
        ]
      },
      {
        id: '6',
        name: 'Monóxido de Carbono',
        values: [
          '0.6', '0.4', '0.4', '0.4',
          '0.4', '0.3', '0.4', '0.5',
          '0.5', '0.6', '0.3', '0.3',
          '0.3', '0.3', '0.3', '0.3',
          '0.3', '0.3', '0.3', '0.4',
          '0.5', '0.7', undefined,  undefined
        ]
      },
      {
        id: '7',
        name: 'Monóxido de Nitrógeno',
        values: [
          '39', '8',  '8',  '7',  '6',
          '3',  '6',  '19', '34', '50',
          '9',  '6',  '5',  '5',  '5',
          '3',  '3',  '4',  '5',  '6',
          '11', '28', undefined, undefined
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
          '57', '43', '49', '34',
          '31', '23', '28', '31',
          '37', '44', '25', '17',
          '14', '13', '15', '12',
          '10', '22', '35', '51',
          '64', '83', undefined, undefined
        ]
      },
      {
        id: '10',
        name: 'Partículas < 10 µm',
        scoring: [
          { name: 'muy bien', range: [ 0, 20 ] },
          { name: 'bien', range: [ 21, 35 ] },
          { name: 'regular', range: [ 36, 50 ] },
          { name: 'mal', range: [ 51, 100 ] },
          { name: 'muy mal', range: [ 101, 1200 ] }
        ],
        values: [
          '45',  '33',  '26', '27',
          '26',  '25',  '26', '27',
          '34',  '45',  '31', '26',
          '26',  '22',  '32', '36',
          '49',  '66',  '70', '85',
          '120', '121', undefined, undefined
        ]
      },
      {
        id: '12',
        name: 'Óxidos de Nitrógeno',
        values: [
          '117', '55',  '60', '44',
          '40',  '28',  '38', '60',
          '89',  '120', '39', '26',
          '22',  '20',  '22', '17',
          '14',  '28',  '43', '60',
          '80',  '126', undefined, undefined
        ]
      },
      {
        id: '14',
        name: 'Ozono',
        scoring: [
          { name: 'muy bien', range: [ 0, 80 ] },
          { name: 'bien', range: [ 81, 120 ] },
          { name: 'regular', range: [ 121, 180 ] },
          { name: 'mal', range: [ 181, 240 ] },
          { name: 'muy mal', range: [ 241, 600 ] }
        ],
        values: [
          '3',  '4',  '5',  '4',  '4',
          '7',  '5',  '3',  '4',  '8',
          '53', '67', '78', '85', '85',
          '83', '78', '62', '47', '31',
          '19', '5',  undefined, undefined
        ]
      },
      {
        id: '20',
        name: 'Tolueno',
        values: [
          '7.9', '3.8', '2.9', '2.9',
          '3.3', '2.5', '2.8', '2.7',
          '3.5', '3.6', '3.9', '0.8',
          '1.2', '0.8', '0.9', '0.6',
          '0.5', '0.8', '0.8', '1.0',
          '2.8', '4.2', undefined,  undefined
        ]
      },
      {
        id: '30',
        name: 'Benceno',
        values: [
          '1.0', '0.4', '0.3', '0.3',
          '0.3', '0.3', '0.4', '0.4',
          '0.6', '0.7', '0.5', '0.3',
          '0.3', '0.4', '0.4', '0.3',
          '0.2', '0.3', '0.2', '0.3',
          '0.5', '0.7', undefined,  undefined
        ]
      },
      {
        id: '35',
        name: 'Etilbenceno',
        values: [
          '0.8', '0.4', '0.3', '0.3',
          '0.3', '0.2', '0.2', '0.3',
          '0.5', '0.7', '1.0', '0.3',
          '0.5', '0.2', '0.1', '0.1',
          '0.1', '0.1', '0.1', '0.1',
          '0.2', '0.4', undefined,  undefined
        ]
      }
    ]
  },
  {
    id: '24',
    name: 'Casa de Campo',
    address: 'Casa de Campo  (Terminal del Teleférico)',
    lng: '-3.7473445',
    lat: '40.4193577',
    pollutants: [
      {
        id: '7',
        name: 'Monóxido de Nitrógeno',
        values: [
          '2',  '5', '2',  '4',  '3',
          '3',  '1', '1',  '4',  '11',
          '19', '4', '3',  '2',  '1',
          '1',  '1', '1',  '1',  '1',
          '1',  '3', undefined, undefined
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
          '48', '41', '44', '40', '30',
          '28', '19', '21', '20', '20',
          '35', '15', '12', '8',  '7',
          '6',  '5',  '9',  '18', '24',
          '40', '67', undefined, undefined
        ]
      },
      {
        id: '9',
        name: 'Partículas < 2.5 µm',
        scoring: [
          { name: 'muy bien', range: [ 0, 10 ] },
          { name: 'bien', range: [ 11, 20 ] },
          { name: 'regular', range: [ 21, 25 ] },
          { name: 'mal', range: [ 26, 50 ] },
          { name: 'muy mal', range: [ 51, 800 ] }
        ],
        values: [
          '19', '18', '16', '15',
          '15', '11', '14', '14',
          '15', '15', '16', '18',
          '20', '13', '16', '19',
          '21', '24', '24', '26',
          '39', '41', undefined, undefined
        ]
      },
      {
        id: '10',
        name: 'Partículas < 10 µm',
        scoring: [
          { name: 'muy bien', range: [ 0, 20 ] },
          { name: 'bien', range: [ 21, 35 ] },
          { name: 'regular', range: [ 36, 50 ] },
          { name: 'mal', range: [ 51, 100 ] },
          { name: 'muy mal', range: [ 101, 1200 ] }
        ],
        values: [
          '38',  '36',  '33', '29',
          '28',  '24',  '26', '26',
          '27',  '25',  '29', '32',
          '29',  '24',  '28', '38',
          '46',  '59',  '61', '70',
          '104', '116', undefined, undefined
        ]
      },
      {
        id: '12',
        name: 'Óxidos de Nitrógeno',
        values: [
          '50', '48', '48', '45', '34',
          '34', '21', '23', '26', '38',
          '64', '21', '16', '10', '8',
          '7',  '7',  '10', '19', '25',
          '41', '72', undefined, undefined
        ]
      },
      {
        id: '14',
        name: 'Ozono',
        scoring: [
          { name: 'muy bien', range: [ 0, 80 ] },
          { name: 'bien', range: [ 81, 120 ] },
          { name: 'regular', range: [ 121, 180 ] },
          { name: 'mal', range: [ 181, 240 ] },
          { name: 'muy mal', range: [ 241, 600 ] }
        ],
        values: [
          '7',  '7',  '5',  '4',  '4',
          '4',  '6',  '7',  '6',  '14',
          '38', '62', '72', '84', '86',
          '81', '77', '70', '59', '52',
          '39', '14', undefined, undefined
        ]
      },
      {
        id: '20',
        name: 'Tolueno',
        values: [
          '9.8', '9.1', '9.6',  '9.6',
          '9.6', '9.7', '9.2',  '8.8',
          '8.9', '9.0', '10.2', '8.8',
          '8.4', '8.2', '8.0',  '8.0',
          '7.9', '7.8', '7.8',  '7.8',
          '7.7', '8.9', undefined,   undefined
        ]
      },
      {
        id: '30',
        name: 'Benceno',
        values: [
          '0.7', '0.6', '0.6', '0.6',
          '0.6', '0.7', '0.6', '0.5',
          '0.5', '0.5', '0.8', '0.5',
          '0.4', '0.4', '0.3', '0.3',
          '0.3', '0.2', '0.2', '0.3',
          '0.4', '0.6', undefined,  undefined
        ]
      },
      {
        id: '35',
        name: 'Etilbenceno',
        values: [
          '0.3', '0.1', '0.2', '0.1',
          '0.1', '0.2', '0.1', '0.1',
          '0.1', '0.2', '1.0', '0.3',
          '0.3', '0.1', '0.1', '0.1',
          '0.1', '0.1', '0.1', '0.1',
          '0.1', '0.1', undefined,  undefined
        ]
      }
    ]
  },
  {
    id: '27',
    name: 'Barajas Pueblo',
    address: 'C/. Júpiter, 21 (Barajas) ',
    lng: '-3.5800258',
    lat: '40.4769179',
    pollutants: [
      {
        id: '7',
        name: 'Monóxido de Nitrógeno',
        values: [
          '69', '24', '14', '8',  '3',
          '7',  '11', '13', '30', '25',
          '18', '3',  '1',  '1',  '1',
          '1',  '1',  '1',  '1',  '1',
          '3',  '3',  undefined, undefined
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
          '66', '54', '43', '41', '34',
          '39', '36', '41', '48', '36',
          '26', '16', '10', '10', '10',
          '9',  '10', '17', '31', '36',
          '56', '60', undefined, undefined
        ]
      },
      {
        id: '12',
        name: 'Óxidos de Nitrógeno',
        values: [
          '172', '90', '65', '54',
          '39',  '50', '52', '61',
          '94',  '75', '54', '22',
          '11',  '12', '12', '11',
          '11',  '19', '33', '38',
          '62',  '65', undefined, undefined
        ]
      },
      {
        id: '14',
        name: 'Ozono',
        scoring: [
          { name: 'muy bien', range: [ 0, 80 ] },
          { name: 'bien', range: [ 81, 120 ] },
          { name: 'regular', range: [ 121, 180 ] },
          { name: 'mal', range: [ 181, 240 ] },
          { name: 'muy mal', range: [ 241, 600 ] }
        ],
        values: [
          '2',  '2',  '3',  '5',  '8',
          '6',  '6',  '5',  '6',  '13',
          '25', '60', '76', '83', '82',
          '83', '81', '67', '47', '41',
          '22', '12', undefined, undefined
        ]
      }
    ]
  },
  {
    id: '35',
    name: 'Pza. del Carmen',
    address: 'Plaza del Carmen esq. Tres Cruces. ',
    lng: '-3.7031662',
    lat: '40.4192091',
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
          '9', '9', '8',  '8',  '8',
          '8', '9', '8',  '8',  '8',
          '9', '8', '8',  '7',  '8',
          '8', '8', '9',  '9',  '8',
          '9', '9', undefined, undefined
        ]
      },
      {
        id: '6',
        name: 'Monóxido de Carbono',
        values: [
          '0.4', '0.4', '0.3', '0.2',
          '0.2', '0.2', '0.3', '0.3',
          '0.4', '0.3', '0.3', '0.3',
          '0.3', '0.2', '0.2', '0.2',
          '0.2', '0.2', '0.3', '0.2',
          '0.3', '0.5', undefined,  undefined
        ]
      },
      {
        id: '7',
        name: 'Monóxido de Nitrógeno',
        values: [
          '13', '15', '1',  '1',  '2',
          '4',  '34', '3',  '8',  '13',
          '9',  '4',  '3',  '2',  '1',
          '1',  '1',  '1',  '1',  '1',
          '2',  '5',  undefined, undefined
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
          '72', '63', '27', '25',
          '26', '33', '45', '41',
          '48', '46', '36', '19',
          '16', '13', '14', '12',
          '11', '15', '28', '28',
          '46', '62', undefined, undefined
        ]
      },
      {
        id: '12',
        name: 'Óxidos de Nitrógeno',
        values: [
          '92', '86', '28', '27',
          '29', '38', '98', '45',
          '60', '65', '50', '26',
          '21', '15', '16', '13',
          '12', '16', '29', '29',
          '49', '69', undefined, undefined
        ]
      },
      {
        id: '14',
        name: 'Ozono',
        scoring: [
          { name: 'muy bien', range: [ 0, 80 ] },
          { name: 'bien', range: [ 81, 120 ] },
          { name: 'regular', range: [ 121, 180 ] },
          { name: 'mal', range: [ 181, 240 ] },
          { name: 'muy mal', range: [ 241, 600 ] }
        ],
        values: [
          '2',  '6',  '33', '34', '34',
          '28', '13', '22', '17', '24',
          '40', '57', '68', '78', '77',
          '78', '71', '61', '48', '46',
          '31', '16', undefined, undefined
        ]
      }
    ]
  },
  {
    id: '36',
    name: 'Moratalaz',
    address: 'Avd. Moratalaz  esq. Camino de los Vinateros',
    lng: '-3.6453104',
    lat: '40.4079517',
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
          '7',  '5',  '4',  '4',  '5',
          '4',  '4',  '4',  '5',  '7',
          '6',  '5',  '4',  '4',  '4',
          '4',  '4',  '3',  '3',  '4',
          '18', '30', undefined, undefined
        ]
      },
      {
        id: '7',
        name: 'Monóxido de Nitrógeno',
        values: [
          '2', '1',  '1',  '1',  '1',
          '2', '13', '21', '76', '22',
          '5', '5',  '5',  '4',  '2',
          '1', '1',  '2',  '2',  '3',
          '8', '5',  undefined, undefined
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
          '51', '31', '16', '15',
          '17', '34', '52', '59',
          '74', '55', '23', '21',
          '20', '17', '13', '12',
          '12', '18', '29', '39',
          '64', '62', undefined, undefined
        ]
      },
      {
        id: '10',
        name: 'Partículas < 10 µm',
        scoring: [
          { name: 'muy bien', range: [ 0, 20 ] },
          { name: 'bien', range: [ 21, 35 ] },
          { name: 'regular', range: [ 36, 50 ] },
          { name: 'mal', range: [ 51, 100 ] },
          { name: 'muy mal', range: [ 101, 1200 ] }
        ],
        values: [
          '33',  '22',  '14', '14',
          '15',  '22',  '28', '34',
          '40',  '34',  '26', '23',
          '22',  '20',  '30', '33',
          '41',  '54',  '62', '81',
          '106', '104', undefined, undefined
        ]
      },
      {
        id: '12',
        name: 'Óxidos de Nitrógeno',
        values: [
          '54',  '32', '18', '17',
          '19',  '38', '72', '90',
          '191', '89', '30', '29',
          '28',  '23', '16', '14',
          '14',  '21', '32', '43',
          '75',  '70', undefined, undefined
        ]
      }
    ]
  },
  {
    id: '38',
    name: 'Cuatro Caminos',
    address: 'Avda. Pablo Iglesias esq. C/ Marqués de Lema',
    lng: '-3.7071303',
    lat: '40.4455439',
    pollutants: [
      {
        id: '7',
        name: 'Monóxido de Nitrógeno',
        values: [
          '6',  '4', '1',  '1',  '1',
          '1',  '1', '1',  '1',  '6',
          '10', '6', '5',  '5',  '4',
          '2',  '1', '2',  '6',  '4',
          '6',  '1', undefined, undefined
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
          '80', '70', '27', '19',
          '18', '16', '31', '38',
          '36', '35', '34', '24',
          '19', '18', '19', '15',
          '13', '23', '40', '44',
          '58', '62', undefined, undefined
        ]
      },
      {
        id: '9',
        name: 'Partículas < 2.5 µm',
        scoring: [
          { name: 'muy bien', range: [ 0, 10 ] },
          { name: 'bien', range: [ 11, 20 ] },
          { name: 'regular', range: [ 21, 25 ] },
          { name: 'mal', range: [ 26, 50 ] },
          { name: 'muy mal', range: [ 51, 800 ] }
        ],
        values: [
          '13', '13', '9',  '7',  '5',
          '5',  '7',  '10', '11', '15',
          '13', '14', '12', '13', '15',
          '15', '12', '13', '16', '20',
          '32', '35', undefined, undefined
        ]
      },
      {
        id: '10',
        name: 'Partículas < 10 µm',
        scoring: [
          { name: 'muy bien', range: [ 0, 20 ] },
          { name: 'bien', range: [ 21, 35 ] },
          { name: 'regular', range: [ 36, 50 ] },
          { name: 'mal', range: [ 51, 100 ] },
          { name: 'muy mal', range: [ 101, 1200 ] }
        ],
        values: [
          '28', '38', '19', '12',
          '10', '10', '12', '16',
          '17', '21', '21', '23',
          '20', '21', '24', '28',
          '29', '38', '43', '53',
          '84', '90', undefined, undefined
        ]
      },
      {
        id: '12',
        name: 'Óxidos de Nitrógeno',
        values: [
          '90', '75', '29', '21',
          '19', '18', '33', '40',
          '38', '44', '50', '33',
          '26', '26', '24', '17',
          '15', '26', '48', '50',
          '66', '65', undefined, undefined
        ]
      },
      {
        id: '20',
        name: 'Tolueno',
        values: [
          '2.7', '2.3', '1.8', '0.9',
          '0.7', '0.6', '0.5', '0.6',
          '0.6', '0.7', '0.9', '0.8',
          '0.6', '0.5', '0.6', '0.7',
          '0.5', '0.4', '0.5', '0.7',
          '0.7', '1.0', undefined,  undefined
        ]
      },
      {
        id: '30',
        name: 'Benceno',
        values: [
          '0.4', '0.4', '0.2', '0.1',
          '0.1', '0.1', '0.1', '0.1',
          '0.2', '0.2', '0.2', '0.2',
          '0.2', '0.2', '0.2', '0.2',
          '0.2', '0.1', '0.1', '0.2',
          '0.2', '0.2', undefined,  undefined
        ]
      },
      {
        id: '35',
        name: 'Etilbenceno',
        values: [
          '0.5', '0.5', '0.4', '0.2',
          '0.1', '0.1', '0.1', '0.1',
          '0.1', '0.1', '0.2', '0.1',
          '0.1', '0.1', '0.2', '0.2',
          '0.1', '0.1', '0.1', '0.2',
          '0.2', '0.2', undefined,  undefined
        ]
      }
    ]
  },
  {
    id: '39',
    name: 'Barrio del Pilar',
    address: 'Avd. Betanzos esq. C/  Monforte de Lemos ',
    lng: '-3.7115364',
    lat: '40.4782322',
    pollutants: [
      {
        id: '7',
        name: 'Monóxido de Nitrógeno',
        values: [
          '25', '20', '6',  '4',  '12',
          '11', '11', '8',  '57', '9',
          '7',  '7',  '4',  '3',  '2',
          '2',  '1',  '2',  '2',  '2',
          '1',  '5',  undefined, undefined
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
          '64', '62', '49', '40',
          '39', '36', '45', '43',
          '53', '38', '30', '26',
          '19', '18', '18', '14',
          '13', '18', '34', '37',
          '42', '61', undefined, undefined
        ]
      },
      {
        id: '12',
        name: 'Óxidos de Nitrógeno',
        values: [
          '103', '93', '58', '47',
          '57',  '53', '62', '54',
          '141', '51', '41', '37',
          '25',  '23', '21', '17',
          '15',  '21', '38', '40',
          '44',  '69', undefined, undefined
        ]
      },
      {
        id: '14',
        name: 'Ozono',
        scoring: [
          { name: 'muy bien', range: [ 0, 80 ] },
          { name: 'bien', range: [ 81, 120 ] },
          { name: 'regular', range: [ 121, 180 ] },
          { name: 'mal', range: [ 181, 240 ] },
          { name: 'muy mal', range: [ 241, 600 ] }
        ],
        values: [
          '8',  '7',  '7',  '10', '7',
          '7',  '9',  '16', '8',  '28',
          '37', '41', '51', '56', '56',
          '56', '53', '45', '34', '30',
          '27', '15', undefined, undefined
        ]
      }
    ]
  },
  {
    id: '40',
    name: 'Vallecas',
    address: 'C/ Arroyo del Olivar  esq. C/  Río Grande. ',
    lng: '-3.6515286',
    lat: '40.3881478',
    pollutants: [
      {
        id: '7',
        name: 'Monóxido de Nitrógeno',
        values: [
          '2', '1', '1',  '1',  '1',
          '1', '3', '7',  '6',  '9',
          '7', '6', '5',  '4',  '3',
          '3', '3', '4',  '3',  '3',
          '7', '5', undefined, undefined
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
          '34', '22', '18', '14',
          '14', '26', '37', '53',
          '37', '33', '19', '15',
          '15', '13', '12', '12',
          '11', '21', '29', '35',
          '48', '45', undefined, undefined
        ]
      },
      {
        id: '10',
        name: 'Partículas < 10 µm',
        scoring: [
          { name: 'muy bien', range: [ 0, 20 ] },
          { name: 'bien', range: [ 21, 35 ] },
          { name: 'regular', range: [ 36, 50 ] },
          { name: 'mal', range: [ 51, 100 ] },
          { name: 'muy mal', range: [ 101, 1200 ] }
        ],
        values: [
          '37', '22',  '17', '14',
          '15', '15',  '21', '26',
          '27', '26',  '28', '29',
          '29', '31',  '36', '36',
          '42', '59',  '63', '71',
          '97', '111', undefined, undefined
        ]
      },
      {
        id: '12',
        name: 'Óxidos de Nitrógeno',
        values: [
          '37', '23', '19', '15',
          '16', '28', '42', '64',
          '46', '47', '30', '24',
          '22', '19', '18', '16',
          '15', '26', '34', '39',
          '58', '53', undefined, undefined
        ]
      }
    ]
  },
  {
    id: '47',
    name: 'Mendez Alvaro',
    address: 'C/ Juan de Mariana / Pza. Amanecer Mendez Alvaro',
    lng: '-3.6868138',
    lat: '40.3980991',
    pollutants: [
      {
        id: '7',
        name: 'Monóxido de Nitrógeno',
        values: [
          '13', '24', '1',  '1',  '7',
          '5',  '9',  '21', '39', '38',
          '10', '1',  '1',  '1',  '1',
          '1',  '1',  '1',  '1',  '1',
          '1',  '9',  undefined, undefined
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
          '72', '62', '34', '40',
          '42', '37', '38', '40',
          '48', '62', '37', '16',
          '13', '12', '11', '11',
          '10', '19', '29', '27',
          '42', '72', undefined, undefined
        ]
      },
      {
        id: '9',
        name: 'Partículas < 2.5 µm',
        scoring: [
          { name: 'muy bien', range: [ 0, 10 ] },
          { name: 'bien', range: [ 11, 20 ] },
          { name: 'regular', range: [ 21, 25 ] },
          { name: 'mal', range: [ 26, 50 ] },
          { name: 'muy mal', range: [ 51, 800 ] }
        ],
        values: [
          '14', '16', '12', '9',  '11',
          '12', '12', '10', '12', '19',
          '17', '15', '13', '15', '13',
          '19', '20', '20', '17', '20',
          '29', '30', undefined, undefined
        ]
      },
      {
        id: '10',
        name: 'Partículas < 10 µm',
        scoring: [
          { name: 'muy bien', range: [ 0, 20 ] },
          { name: 'bien', range: [ 21, 35 ] },
          { name: 'regular', range: [ 36, 50 ] },
          { name: 'mal', range: [ 51, 100 ] },
          { name: 'muy mal', range: [ 101, 1200 ] }
        ],
        values: [
          '24', '24', '19', '12',
          '15', '17', '17', '15',
          '18', '24', '23', '22',
          '18', '21', '20', '26',
          '31', '37', '35', '44',
          '63', '64', undefined, undefined
        ]
      },
      {
        id: '12',
        name: 'Óxidos de Nitrógeno',
        values: [
          '92',  '99',  '35', '42',
          '53',  '45',  '51', '72',
          '107', '121', '53', '18',
          '15',  '14',  '13', '13',
          '12',  '20',  '31', '29',
          '43',  '86',  undefined, undefined
        ]
      }
    ]
  },
  {
    id: '48',
    name: 'Castellana',
    address: 'C/ Jose Gutierrez Abascal',
    lng: '-3.6903729',
    lat: '40.4398904',
    pollutants: [
      {
        id: '7',
        name: 'Monóxido de Nitrógeno',
        values: [
          '2', '1', '1',  '1',  '1',
          '1', '1', '1',  '3',  '5',
          '7', '4', '3',  '3',  '2',
          '1', '1', '1',  '2',  '2',
          '3', '5', undefined, undefined
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
          '62', '58', '24', '21',
          '17', '22', '40', '44',
          '46', '40', '32', '25',
          '19', '21', '21', '15',
          '14', '24', '38', '44',
          '57', '68', undefined, undefined
        ]
      },
      {
        id: '9',
        name: 'Partículas < 2.5 µm',
        scoring: [
          { name: 'muy bien', range: [ 0, 10 ] },
          { name: 'bien', range: [ 11, 20 ] },
          { name: 'regular', range: [ 21, 25 ] },
          { name: 'mal', range: [ 26, 50 ] },
          { name: 'muy mal', range: [ 51, 800 ] }
        ],
        values: [
          '12', '12', '11', '12', '7',
          '10', '8',  '12', '13', '15',
          '15', '18', '13', '10', '20',
          '18', '15', '20', '25', '23',
          '38', '36', undefined, undefined
        ]
      },
      {
        id: '10',
        name: 'Partículas < 10 µm',
        scoring: [
          { name: 'muy bien', range: [ 0, 20 ] },
          { name: 'bien', range: [ 21, 35 ] },
          { name: 'regular', range: [ 36, 50 ] },
          { name: 'mal', range: [ 51, 100 ] },
          { name: 'muy mal', range: [ 101, 1200 ] }
        ],
        values: [
          '30', '27', '21', '18',
          '13', '16', '15', '20',
          '22', '24', '27', '29',
          '22', '21', '28', '29',
          '34', '49', '53', '59',
          '95', '95', undefined, undefined
        ]
      },
      {
        id: '12',
        name: 'Óxidos de Nitrógeno',
        values: [
          '66', '60', '26', '22',
          '19', '24', '42', '45',
          '50', '48', '43', '31',
          '23', '26', '25', '17',
          '15', '26', '40', '48',
          '61', '75', undefined, undefined
        ]
      }
    ]
  },
  {
    id: '49',
    name: 'Parque del Retiro',
    address: 'Paseo Venezuela- Casa de Vacas',
    lng: '-3.6824999',
    lat: '40.4144444',
    pollutants: [
      {
        id: '7',
        name: 'Monóxido de Nitrógeno',
        values: [
          '6', '1', '1',  '1',  '1',
          '1', '1', '1',  '2',  '5',
          '5', '1', '1',  '1',  '1',
          '1', '1', '1',  '1',  '1',
          '1', '1', undefined, undefined
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
          '53', '44', '21', '16', '16',
          '14', '23', '33', '37', '34',
          '28', '14', '11', '9',  '9',
          '9',  '8',  '14', '20', '19',
          '29', '50', undefined, undefined
        ]
      },
      {
        id: '12',
        name: 'Óxidos de Nitrógeno',
        values: [
          '62', '46', '23', '18',
          '18', '15', '24', '34',
          '40', '41', '36', '16',
          '13', '11', '10', '11',
          '10', '15', '22', '20',
          '30', '51', undefined, undefined
        ]
      },
      {
        id: '14',
        name: 'Ozono',
        scoring: [
          { name: 'muy bien', range: [ 0, 80 ] },
          { name: 'bien', range: [ 81, 120 ] },
          { name: 'regular', range: [ 121, 180 ] },
          { name: 'mal', range: [ 181, 240 ] },
          { name: 'muy mal', range: [ 241, 600 ] }
        ],
        values: [
          '5',  '10', '33', '36', '37',
          '41', '28', '14', '17', '28',
          '50', '70', '82', '91', '92',
          '91', '83', '71', '58', '58',
          '40', '14', undefined, undefined
        ]
      }
    ]
  },
  {
    id: '50',
    name: 'Plaza Castilla',
    address: 'Plaza Castilla (Canal)',
    lng: '-3.6887449',
    lat: '40.4655841',
    pollutants: [
      {
        id: '7',
        name: 'Monóxido de Nitrógeno',
        values: [
          '2', '1', '1',  '1',  '1',
          '1', '1', '1',  '4',  '5',
          '8', '5', '4',  '4',  '5',
          '2', '1', '3',  '4',  '6',
          '4', '3', undefined, undefined
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
          '59', '52', '24', '19',
          '20', '28', '35', '47',
          '49', '39', '34', '26',
          '21', '21', '24', '19',
          '17', '27', '44', '48',
          '57', '63', undefined, undefined
        ]
      },
      {
        id: '9',
        name: 'Partículas < 2.5 µm',
        scoring: [
          { name: 'muy bien', range: [ 0, 10 ] },
          { name: 'bien', range: [ 11, 20 ] },
          { name: 'regular', range: [ 21, 25 ] },
          { name: 'mal', range: [ 26, 50 ] },
          { name: 'muy mal', range: [ 51, 800 ] }
        ],
        values: [
          '21', '16', '11', '9',  '3',
          '6',  '12', '12', '12', '13',
          '20', '15', '15', '15', '15',
          '21', '23', '20', '16', '20',
          '33', '37', undefined, undefined
        ]
      },
      {
        id: '10',
        name: 'Partículas < 10 µm',
        scoring: [
          { name: 'muy bien', range: [ 0, 20 ] },
          { name: 'bien', range: [ 21, 35 ] },
          { name: 'regular', range: [ 36, 50 ] },
          { name: 'mal', range: [ 51, 100 ] },
          { name: 'muy mal', range: [ 101, 1200 ] }
        ],
        values: [
          '35',  '25',  '22', '13',
          '9',   '14',  '17', '21',
          '23',  '25',  '30', '29',
          '27',  '27',  '34', '41',
          '40',  '49',  '54', '61',
          '100', '103', undefined, undefined
        ]
      },
      {
        id: '12',
        name: 'Óxidos de Nitrógeno',
        values: [
          '62', '53', '25', '20',
          '21', '30', '37', '49',
          '56', '47', '47', '34',
          '26', '27', '32', '22',
          '20', '31', '50', '57',
          '63', '67', undefined, undefined
        ]
      }
    ]
  },
  {
    id: '54',
    name: 'Ensanche de Vallecas',
    address: 'Avda La Gavia / Avda. Las Suertes',
    lng: '-3.6121394',
    lat: '40.3730118',
    pollutants: [
      {
        id: '7',
        name: 'Monóxido de Nitrógeno',
        values: [
          '1',  '1',  '1',  '1',  '1',
          '6',  '12', '36', '67', '50',
          '7',  '3',  '3',  '2',  '1',
          '1',  '1',  '1',  '2',  '4',
          '17', '18', undefined, undefined
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
          '30', '17', '12', '11', '17',
          '34', '47', '56', '61', '59',
          '22', '11', '10', '7',  '6',
          '6',  '6',  '9',  '18', '26',
          '52', '58', undefined, undefined
        ]
      },
      {
        id: '12',
        name: 'Óxidos de Nitrógeno',
        values: [
          '31',  '18',  '13', '13',
          '19',  '43',  '65', '112',
          '163', '135', '32', '16',
          '15',  '9',   '8',  '8',
          '7',   '11',  '20', '31',
          '77',  '85',  undefined, undefined
        ]
      },
      {
        id: '14',
        name: 'Ozono',
        scoring: [
          { name: 'muy bien', range: [ 0, 80 ] },
          { name: 'bien', range: [ 81, 120 ] },
          { name: 'regular', range: [ 121, 180 ] },
          { name: 'mal', range: [ 181, 240 ] },
          { name: 'muy mal', range: [ 241, 600 ] }
        ],
        values: [
          '28', '39', '45', '39', '30',
          '15', '3',  '1',  '1',  '11',
          '43', '57', '64', '71', '71',
          '73', '68', '60', '48', '40',
          '18', '14', undefined, undefined
        ]
      }
    ]
  },
  {
    id: '55',
    name: 'Urb. Embajada',
    address: 'C/ Riaño (Barajas) ',
    lng: '-3.5805649',
    lat: '40.4623628',
    pollutants: [
      {
        id: '7',
        name: 'Monóxido de Nitrógeno',
        values: [
          '84', '67', '36', '29', '47',
          '13', '11', '43', '40', '37',
          '18', '6',  '3',  '3',  '2',
          '1',  '1',  '2',  '2',  '3',
          '5',  '13', undefined, undefined
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
          '78', '67', '58', '60',
          '64', '55', '47', '64',
          '64', '53', '36', '19',
          '11', '12', '13', '10',
          '10', '19', '38', '54',
          '61', '68', undefined, undefined
        ]
      },
      {
        id: '10',
        name: 'Partículas < 10 µm',
        scoring: [
          { name: 'muy bien', range: [ 0, 20 ] },
          { name: 'bien', range: [ 21, 35 ] },
          { name: 'regular', range: [ 36, 50 ] },
          { name: 'mal', range: [ 51, 100 ] },
          { name: 'muy mal', range: [ 101, 1200 ] }
        ],
        values: [
          '69', '59', '52', '47',
          '45', '42', '41', '41',
          '42', '45', '43', '44',
          '37', '36', '31', '43',
          '44', '49', '57', '58',
          '75', '98', undefined, undefined
        ]
      },
      {
        id: '12',
        name: 'Óxidos de Nitrógeno',
        values: [
          '208', '170', '113', '104',
          '136', '75',  '63',  '130',
          '124', '110', '64',  '27',
          '15',  '17',  '16',  '12',
          '13',  '21',  '42',  '58',
          '69',  '89',  undefined,  undefined
        ]
      },
      {
        id: '20',
        name: 'Tolueno',
        values: [
          '8.0', '7.2', '4.9', '3.7',
          '2.5', '2.0', '1.8', '1.5',
          undefined,  '1.5', '1.7', '1.7',
          '1.1', '0.5', '0.8', '0.6',
          '2.9', '0.4', '0.8', '0.9',
          '0.7', '1.9', undefined,  undefined
        ]
      },
      {
        id: '30',
        name: 'Benceno',
        values: [
          '1.1', '1.0', '0.9', '0.7',
          '0.6', '0.5', '0.4', '0.2',
          '0.6', '0.3', '0.5', '0.4',
          '0.2', '0.1', '0.1', '0.1',
          '0.2', '0.1', '0.3', '0.2',
          '0.1', '0.4', undefined,  undefined
        ]
      },
      {
        id: '35',
        name: 'Etilbenceno',
        values: [
          '0.1',  '1.2', '0.5', '0.1',
          '0.1',  '0.1', '0.1', '0.1',
          '15.4', '0.1', '0.2', '0.1',
          '0.1',  '0.1', '0.1', '0.1',
          '0.8',  '0.3', '1.2', '0.9',
          '0.1',  '0.1', undefined,  undefined
        ]
      }
    ]
  },
  {
    id: '56',
    name: 'Pza. Elíptica',
    address: ' Pza. Elíptica - Avda. Oporto',
    lng: '-3.7187679',
    lat: '40.3850336',
    pollutants: [
      {
        id: '6',
        name: 'Monóxido de Carbono',
        values: [
          '0.6', '0.4', '0.4', '0.3',
          '0.3', '0.3', '0.3', '0.6',
          '0.6', '0.7', '0.3', '0.2',
          '0.2', '0.2', '0.2', '0.2',
          '0.2', '0.2', '0.3', '0.3',
          '0.5', '0.7', undefined,  undefined
        ]
      },
      {
        id: '7',
        name: 'Monóxido de Nitrógeno',
        values: [
          '53', '20',  '16', '5',  '5',
          '11', '11',  '75', '83', '122',
          '15', '14',  '13', '8',  '11',
          '10', '7',   '14', '17', '16',
          '41', '115', undefined, undefined
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
          '66', '51',  '55', '42',
          '35', '32',  '34', '52',
          '61', '77',  '37', '29',
          '29', '21',  '28', '26',
          '23', '44',  '63', '65',
          '80', '100', undefined, undefined
        ]
      },
      {
        id: '9',
        name: 'Partículas < 2.5 µm',
        scoring: [
          { name: 'muy bien', range: [ 0, 10 ] },
          { name: 'bien', range: [ 11, 20 ] },
          { name: 'regular', range: [ 21, 25 ] },
          { name: 'mal', range: [ 26, 50 ] },
          { name: 'muy mal', range: [ 51, 800 ] }
        ],
        values: [
          '22', '13', '12', '6',  '7',
          '10', '13', '13', '16', '16',
          '17', '12', '15', '15', '14',
          '16', '18', '19', '22', '17',
          '20', '27', undefined, undefined
        ]
      },
      {
        id: '10',
        name: 'Partículas < 10 µm',
        scoring: [
          { name: 'muy bien', range: [ 0, 20 ] },
          { name: 'bien', range: [ 21, 35 ] },
          { name: 'regular', range: [ 36, 50 ] },
          { name: 'mal', range: [ 51, 100 ] },
          { name: 'muy mal', range: [ 101, 1200 ] }
        ],
        values: [
          '41', '25', '23', '12',
          '14', '16', '19', '20',
          '25', '27', '28', '19',
          '22', '22', '23', '27',
          '32', '40', '45', '44',
          '59', '73', undefined, undefined
        ]
      },
      {
        id: '12',
        name: 'Óxidos de Nitrógeno',
        values: [
          '147', '81',  '79', '50',
          '43',  '49',  '52', '167',
          '187', '264', '61', '50',
          '50',  '33',  '45', '41',
          '34',  '65',  '89', '89',
          '144', '275', undefined, undefined
        ]
      },
      {
        id: '14',
        name: 'Ozono',
        scoring: [
          { name: 'muy bien', range: [ 0, 80 ] },
          { name: 'bien', range: [ 81, 120 ] },
          { name: 'regular', range: [ 121, 180 ] },
          { name: 'mal', range: [ 181, 240 ] },
          { name: 'muy mal', range: [ 241, 600 ] }
        ],
        values: [
          '6',  '6',  '8',  '9',  '8',
          '9',  '7',  '6',  '6',  '10',
          '46', '61', '69', '82', '76',
          '76', '70', '50', '31', '23',
          '14', '6',  undefined, undefined
        ]
      }
    ]
  },
  {
    id: '57',
    name: 'Sanchinarro',
    address: 'C/ Princesa de Eboli esq C/ Maria Tudor',
    lng: '-3.6605173',
    lat: '40.4942012',
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
          '3', '3', '3',  '3',  '2',
          '2', '2', '2',  '3',  '3',
          '3', '2', '2',  '2',  '2',
          '2', '2', '2',  '3',  '3',
          '3', '3', undefined, undefined
        ]
      },
      {
        id: '7',
        name: 'Monóxido de Nitrógeno',
        values: [
          '1',  '2', '28', '5',  '6',
          '2',  '1', '2',  '11', '22',
          '12', '4', '3',  '2',  '1',
          '1',  '1', '1',  '1',  '1',
          '1',  '3', undefined, undefined
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
          '47', '51', '64', '36', '60',
          '52', '45', '43', '47', '47',
          '32', '20', '15', '13', '11',
          '10', '9',  '15', '23', '33',
          '38', '55', undefined, undefined
        ]
      },
      {
        id: '10',
        name: 'Partículas < 10 µm',
        scoring: [
          { name: 'muy bien', range: [ 0, 20 ] },
          { name: 'bien', range: [ 21, 35 ] },
          { name: 'regular', range: [ 36, 50 ] },
          { name: 'mal', range: [ 51, 100 ] },
          { name: 'muy mal', range: [ 101, 1200 ] }
        ],
        values: [
          '28',  '22',  '27', '21',
          '20',  '23',  '25', '22',
          '24',  '29',  '28', '25',
          '20',  '23',  '25', '27',
          '33',  '42',  '51', '60',
          '103', '109', undefined, undefined
        ]
      },
      {
        id: '12',
        name: 'Óxidos de Nitrógeno',
        values: [
          '49', '54', '106', '43',
          '69', '56', '47',  '45',
          '64', '80', '51',  '26',
          '19', '17', '13',  '11',
          '11', '17', '25',  '35',
          '39', '59', undefined,  undefined
        ]
      }
    ]
  },
  {
    id: '58',
    name: 'El Pardo',
    address: 'Avda. La Guardia',
    lng: '-3.7746101',
    lat: '40.5180701',
    pollutants: [
      {
        id: '7',
        name: 'Monóxido de Nitrógeno',
        values: [
          '1',  '1',  '1',  '1',  '1',
          '1',  '2',  '2',  '7',  '11',
          '13', '9',  '3',  '2',  '1',
          '1',  '1',  '2',  '6',  '55',
          '54', '10', undefined, undefined
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
          '15', '12', '13', '13', '12',
          '12', '16', '17', '17', '18',
          '27', '32', '16', '15', '11',
          '8',  '9',  '13', '29', '78',
          '74', '49', undefined, undefined
        ]
      },
      {
        id: '12',
        name: 'Óxidos de Nitrógeno',
        values: [
          '16',  '13', '14', '15',
          '13',  '14', '20', '20',
          '27',  '34', '48', '47',
          '21',  '19', '13', '10',
          '10',  '16', '39', '162',
          '157', '64', undefined, undefined
        ]
      },
      {
        id: '14',
        name: 'Ozono',
        scoring: [
          { name: 'muy bien', range: [ 0, 80 ] },
          { name: 'bien', range: [ 81, 120 ] },
          { name: 'regular', range: [ 121, 180 ] },
          { name: 'mal', range: [ 181, 240 ] },
          { name: 'muy mal', range: [ 241, 600 ] }
        ],
        values: [
          '14', '13', '11', '11', '11',
          '11', '10', '8',  '9',  '12',
          '21', '34', '49', '53', '57',
          '57', '53', '48', '38', '13',
          '8',  '11', undefined, undefined
        ]
      }
    ]
  },
  {
    id: '59',
    name: 'Juan Carlos I',
    address: 'Parque Juan Carlos I (frente oficinas mantenimiento)',
    lng: '-3.6163407',
    lat: '40.4607255',
    pollutants: [
      {
        id: '7',
        name: 'Monóxido de Nitrógeno',
        values: [
          '15', '85', '38', '26', '1',
          '1',  '1',  '7',  '9',  '14',
          '10', '2',  '1',  '1',  '1',
          '1',  '1',  '1',  '1',  '1',
          '2',  '1',  undefined, undefined
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
          '67', '70', '60', '53', '42',
          '39', '41', '43', '43', '32',
          '27', '14', '10', '8',  '8',
          '7',  '7',  '13', '20', '28',
          '57', '62', undefined, undefined
        ]
      },
      {
        id: '12',
        name: 'Óxidos de Nitrógeno',
        values: [
          '90', '201', '118', '93',
          '44', '41',  '43',  '54',
          '57', '53',  '42',  '16',
          '11', '10',  '9',   '8',
          '8',  '14',  '21',  '29',
          '60', '64',  undefined,  undefined
        ]
      },
      {
        id: '14',
        name: 'Ozono',
        scoring: [
          { name: 'muy bien', range: [ 0, 80 ] },
          { name: 'bien', range: [ 81, 120 ] },
          { name: 'regular', range: [ 121, 180 ] },
          { name: 'mal', range: [ 181, 240 ] },
          { name: 'muy mal', range: [ 241, 600 ] }
        ],
        values: [
          '2',  '1',  '1',  '1',  '2',
          '5',  '2',  '1',  '6',  '10',
          '26', '59', '73', '79', '80',
          '82', '80', '69', '57', '48',
          '22', '10', undefined, undefined
        ]
      }
    ]
  },
  {
    id: '60',
    name: 'Tres Olivos',
    address: 'Plaza Tres Olivos ',
    lng: '-3.6897308',
    lat: '40.5005477',
    pollutants: [
      {
        id: '7',
        name: 'Monóxido de Nitrógeno',
        values: [
          '5',  '3', '10', '3',  '1',
          '3',  '8', '17', '7',  '13',
          '10', '4', '3',  '2',  '2',
          '2',  '2', '1',  '1',  '1',
          '2',  '2', undefined, undefined
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
          '59', '61', '65', '40',
          '35', '51', '55', '55',
          '52', '52', '39', '27',
          '21', '17', '17', '15',
          '12', '15', '24', '30',
          '37', '57', undefined, undefined
        ]
      },
      {
        id: '10',
        name: 'Partículas < 10 µm',
        scoring: [
          { name: 'muy bien', range: [ 0, 20 ] },
          { name: 'bien', range: [ 21, 35 ] },
          { name: 'regular', range: [ 36, 50 ] },
          { name: 'mal', range: [ 51, 100 ] },
          { name: 'muy mal', range: [ 101, 1200 ] }
        ],
        values: [
          '25',  '16',  '19', '4',  '5',
          '18',  '19',  '14', '20', '22',
          '19',  '14',  '8',  '9',  '10',
          '21',  '16',  '42', '49', '60',
          '103', '100', undefined, undefined
        ]
      },
      {
        id: '12',
        name: 'Óxidos de Nitrógeno',
        values: [
          '66', '67', '81', '45',
          '37', '55', '68', '82',
          '63', '73', '55', '34',
          '26', '20', '19', '17',
          '15', '17', '26', '32',
          '40', '61', undefined, undefined
        ]
      },
      {
        id: '14',
        name: 'Ozono',
        scoring: [
          { name: 'muy bien', range: [ 0, 80 ] },
          { name: 'bien', range: [ 81, 120 ] },
          { name: 'regular', range: [ 121, 180 ] },
          { name: 'mal', range: [ 181, 240 ] },
          { name: 'muy mal', range: [ 241, 600 ] }
        ],
        values: [
          '17', '9',  '2',  '22', '27',
          '10', '4',  '3',  '12', '21',
          '42', '59', '71', '80', '81',
          '82', '77', '69', '57', '49',
          '43', '23', undefined, undefined
        ]
      }
    ]
  }
]
