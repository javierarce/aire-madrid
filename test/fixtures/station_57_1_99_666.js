module.exports = {
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
        '3', '3', '-1', '-1'
      ]
    }
  ]
}
