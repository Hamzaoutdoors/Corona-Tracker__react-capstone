const fetchCountries = async () => [
  {
    id: 'france',
    name: 'France',
    regions: [{
      id: 'reunion',
      name: 'Reunion',
      todayNewConfirmed: '10',
      todayNewDeaths: '0',
    },
    {
      id: 'guyane',
      name: 'Guyane',
      todayNewConfirmed: '13',
      todayNewDeaths: '0',
    }],
    todayNewConfirmed: 3991,
    todayNewDeaths: 34,
  },
  {
    id: 'germany',
    name: 'Germany',
    regions: [{
      id: 'berlin',
      name: 'Berin',
      todayNewConfirmed: '10',
      todayNewDeaths: '0',
    },
    {
      id: 'bavaria',
      name: 'Bavaria',
      todayNewConfirmed: '13',
      todayNewDeaths: '0',
    }],
    todayNewConfirmed: 39,
    todayNewDeaths: 3,
  },
  {
    id: 'italy',
    name: 'Italy',
    regions: [{
      id: 'veneto',
      name: 'Veneto',
      todayNewConfirmed: '13',
      todayNewDeaths: '0',
    }],
    todayNewConfirmed: 1000,
    todayNewDeaths: 40,
  },
];

export default fetchCountries;
