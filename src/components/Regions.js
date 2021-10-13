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
  const { countries, loaded } = useSelector((state) => state.countries, shallowEqual);

  const [regions, setRegions] = useState(null);

  useEffect(() => {
    dispatch(fetchCountriesAction());
    if (loaded) {
      const countryObj = countries.filter((obj) => obj.id === id);
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
  }, [id, loaded]);

  if (!regions) {
    return (
      <>
        <h2 className="section-title">Wait Data to load</h2>
        <Loading />
      </>
    );
  }
  const regionsMoreAffected = regions.sort((a, b) => b.todayNewConfirmed - a.todayNewConfirmed);
  const total = regions.reduce((acc, curr) => acc + curr.todayNewConfirmed, 0);

  const regionsList = regionsMoreAffected.map((region) => {
    const {
      id, name, todayNewConfirmed, todayNewDeaths,
    } = region;

    return (
      <Region
        key={id}
        item={regions.indexOf(region)}
        id={id}
        name={name}
        todayNewDeaths={todayNewDeaths}
        todayNewConfirmed={todayNewConfirmed}
      />
    );
  });

  return (
    <div>
      {' '}
      <Header total={total} title={id.toUpperCase()} carteName={id} />
      <h3 className="middle-title">{`REGIONS BREAKDOWN - ${regions[0].date}`}</h3>
      <div className="regions-container">
        {regionsList}
      </div>
    </div>
  );
};

export default Regiones;
