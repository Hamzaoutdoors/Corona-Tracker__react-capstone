import React, { useEffect, useState } from 'react';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import Region from './Region';
import Header from './Header';
import Loading from './Loading';
import { fetchCountriesAction } from '../redux/countries/countries';

const Regiones = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries, shallowEqual);
  console.log(countries);
  const [loading, setLoading] = useState(false);
  const [regions, setRegions] = useState(null);

  // const countryObj = countries.filter((obj) => obj.id === id);

  // const total = regions.reduce((acc, curr) => acc + curr.todayNewConfirmed, 0);

  useEffect(() => {
    dispatch(fetchCountriesAction());
    setLoading(true);
    if (countries) {
      const countryObj = countries.filter((obj) => obj.id === id);
      console.log(countryObj);
      // Non camelCase are needed here since they're used by the Narrativa API.
      /* eslint-disable camelcase */
      const regionsData = countryObj[0].regions.map(({
        date, id, name, today_new_confirmed, today_new_deaths,
      }) => ({
        date,
        id,
        name,
        todayNewConfirmed: today_new_confirmed,
        todayNewDeaths: today_new_deaths,
      }));
      setRegions(regionsData);
    } else {
      setRegions(null);
    }
    setLoading(false);
  }, [id]);

  if (loading) {
    return <Loading />;
  }
  if (!regions) {
    return <h2 className="section-title">No Data available to display</h2>;
  }
  const regionsMoreAffected = regions.sort((a, b) => b.todayNewConfirmed - a.todayNewConfirmed);
  const countriesList = regionsMoreAffected.map((country) => {
    const {
      id, name, todayNewConfirmed, todayNewDeaths,
    } = country;

    return (
      <Region
        key={id}
        id={countries.indexOf(country)}
        name={name}
        todayNewDeaths={todayNewDeaths}
        todayNewConfirmed={todayNewConfirmed}
      />
    );
  });

  return (
    <>
      {' '}
      <Header total={10} title={id} carteName={id} />
      <h3 className="middle-title">{`REGIONS BREAKDOWN - ${regions[0].date}`}</h3>
      <div className="countries-container">
        {countriesList}
      </div>
    </>
  );
};

export default Regiones;
