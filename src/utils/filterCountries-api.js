/* eslint-disable consistent-return */
import axios from 'axios';

const transferDate = (date) => date.toISOString().split('T')[0];

const today = new Date();
let todayDate = transferDate(today);

const yesterday = new Date();
yesterday.setDate(today.getDate() - 1);
const yesterDate = transferDate(yesterday);

const config = {
  method: 'get',
  url: `https://api.covid19tracking.narrativa.com/api/${todayDate}`,
};

const fetchCountries = async (name) => {
  const res = await axios(config);
  if (res.status === 200) {
    const contriesData = await res.data.dates[`${todayDate}`].countries;
    const allCountries = Object.keys(contriesData).map((key) => contriesData[key]);
    const filteredCountry = allCountries.filter((obj) => obj.id.includes(name));

    // Non camelCase are needed here since they're used by the Narrativa API.

    /* eslint-disable camelcase */
    const filtered = filteredCountry.map(({
      date, id, name, regions, today_new_confirmed, today_new_deaths,
    }) => ({
      date,
      id,
      name,
      regions,
      todayNewConfirmed: today_new_confirmed,
      todayNewDeaths: today_new_deaths,
    }));
    return filtered;
  }

  todayDate = yesterDate;
};

export default fetchCountries;
