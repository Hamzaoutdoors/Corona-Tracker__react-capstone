import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Regions from '../components/regions/Regions';
import Nav from '../components/Nav';

const RegionsList = () => (
  <div>
    <Nav />
    <div className="p-2 text-bold">
      {' '}
      <Link to="/">
        <FontAwesomeIcon icon={faAngleDoubleLeft} className="return-icon" />
      </Link>
    </div>
    <div className="page-title">
      <p data-content="COVID19 Spread per Regions">COVID19 Spread per Regions</p>
    </div>
    {/* Regions list */}
    <Regions />
  </div>
);

export default RegionsList;
