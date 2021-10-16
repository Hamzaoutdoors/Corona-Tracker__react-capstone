const axios = require('axios');

const fetchCountry = async () => {
  const res = await axios('https://api.covid19tracking.narrativa.com/api/2021-10-10');
  const total = await res.data.total;
  const totalObj = { total };
  return totalObj;
};

module.exports = { fetchCountry };
