import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Countries from '../components/countries/Countries';
import Nav from '../components/Nav';

const CountriesList = () => (
  <div>
    <Nav />
    <Link to="/about" className="arrow">
      {' '}
      <FontAwesomeIcon icon={faAngleDoubleLeft} className="mx-1" />
      About
    </Link>
    <div className="page-title">
      <p data-content="Countries where COVID-19 has spread">Countries where COVID-19 has spread</p>
    </div>
    {/* Counties list */}
    <Countries />
  </div>
);

export default CountriesList;
