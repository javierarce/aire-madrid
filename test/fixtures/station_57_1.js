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
        { value: 5, name: 'muy bien', range: [ 0, 100 ] },
        { value: 4, name: 'bien', range: [ 101, 200 ] },
        { value: 3, name: 'regular', range: [ 201, 350 ] },
        { value: 2, name: 'mal', range: [ 351, 500 ] },
        { value: 1, name: 'muy mal', range: [ 501, 1250 ] }
      ],
      values: [
        3, 3, 3, 3, 2, 2, 2,
        2, 3, 3, 3, 2, 2, 2,
        2, 2, 2, 2, 3, 3, 3,
        3
      ],
      quality: {
        scoring: { name: 'muy bien', value: 5 },
        lastValue: 3,
        time: 22
      }
    }
  ],
  qualityIndex: 1
}
