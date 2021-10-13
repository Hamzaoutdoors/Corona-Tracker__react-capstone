import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons';
import Regions from '../components/Regions';

const RegionsList = () => (
  <div>
    <div className="p-2 text-bold">
      {' '}
      <FontAwesomeIcon icon={faAngleDoubleLeft} className="mx-1" />
    </div>
    {/* Regions list */}
    <Regions />
  </div>
);

export default RegionsList;
