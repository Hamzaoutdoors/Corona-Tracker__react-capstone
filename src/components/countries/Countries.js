import React from 'react';
import { Link } from 'react-router-dom';
import { shallowEqual, useSelector } from 'react-redux';
import Country from './Country';
import Header from '../Header';
import Loading from '../Loading';
import DropdownFilter from '../DropdownFilter';

// import Loading from './Loading';

const Countries = () => {
  const { countries } = useSelector((state) => state.countries, shallowEqual);
  const total = countries.reduce((acc, curr) => acc + curr.todayNewConfirmed, 0);
  const countriesMoreAffected = countries.sort((a, b) => b.todayNewConfirmed - a.todayNewConfirmed);

  const countriesList = countriesMoreAffected.map((country) => {
    const {
      id, name, regions, todayNewConfirmed, todayConfirmed,
    } = country;

    return (
      <Link
        key={id}
        to={`/country/${id}`}
        className="div"
        data-testid={`button-${id}`}
      >
        <Country
          id={countries.indexOf(country)}
          carteName={id}
          name={name}
          regions={regions}
          todayConfirmed={todayConfirmed}
          todayNewConfirmed={todayNewConfirmed}
        />
      </Link>
    );
  });

  return (
    <div>
      {' '}
      <Header total={`${total} Cases`} title="EUROPE" carteName="europe" />
      <h3 className="middle-title">Today New Confirmed by Country</h3>
      {countries.length === 0 ? <Loading /> : <DropdownFilter />}
      <div className="countries-container">
        {countriesList}
      </div>
    </div>
  );
};

export default Countries;
