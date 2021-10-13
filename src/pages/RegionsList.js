import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Regions from '../components/Regions';

const RegionsList = () => (
  <div>
    <div className="p-2 text-bold">
      {' '}
      <Link to="/">
        <FontAwesomeIcon icon={faAngleDoubleLeft} className="return-icon" />
      </Link>
    </div>
    {/* Regions list */}
    <Regions />
  </div>
);

export default RegionsList;
