import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import Country from './Country';
import Header from './Header';

const Countries = () => {
  const countries = useSelector((state) => state.countries, shallowEqual);

  const total = countries.reduce((acc, curr) => acc + curr.todayNewConfirmed, 0);

  const countriesMoreAffected = countries.sort((a, b) => b.todayNewConfirmed - a.todayNewConfirmed);
  const countriesList = countriesMoreAffected.map((country) => {
    const {
      id, name, regions, todayNewConfirmed, todayConfirmed,
    } = country;

    return (
      <Country
        key={id}
        id={countries.indexOf(country)}
        carteName={id}
        name={name}
        regions={regions}
        todayConfirmed={todayConfirmed}
        todayNewConfirmed={todayNewConfirmed}
      />
    );
  });

  return (
    <>
      {' '}
      <Header total={total} title="EUROPE" carteName="europe" />
      <h3 className="middle-title">Today New Confirmed by Country</h3>
      <div className="countries-container">
        {countriesList}
      </div>
    </>
  );
};

export default Countries;
