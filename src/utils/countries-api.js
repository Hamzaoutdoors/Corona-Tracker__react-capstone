/* eslint-disable no-console */
import axios from 'axios';

const date = new Date();
const todayDate = date.toISOString().split('T')[0];

const europecountries = ['spain', 'germany', 'italy', 'france', 'denmark', 'portugal', 'netherlands', 'switzerland', 'united_kingdom'];

const config = {
  method: 'get',
  url: `https://api.covid19tracking.narrativa.com/api/${todayDate}`,
};

const fetchCountries = async () => {
  const res = await axios(config);
  const contriesData = res.data.dates[`${todayDate}`].countries;
  const allCountries = Object.keys(contriesData).map((key) => contriesData[key]);
  const filteredCountries = allCountries.filter((obj) => europecountries.includes(obj.id));

  // Non camelCase are needed here since they're used by the Narrativa API.

  /* eslint-disable camelcase */
  const europeCountries = filteredCountries.map(({
    date, id, name, regions, today_confirmed, today_deaths, today_new_confirmed, today_new_deaths,
  }) => ({
    date,
    id,
    name,
    regions,
    todayConfirmed: today_confirmed,
    todayDeaths: today_deaths,
    todayNewConfirmed: today_new_confirmed,
    todayNewDeaths: today_new_deaths,
  }));
  return europeCountries;
  /* eslint-enable camelcase */
};

export default fetchCountries;
