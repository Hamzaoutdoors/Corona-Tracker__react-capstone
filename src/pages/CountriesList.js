import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons';
import Countries from '../components/Countries';

const CountriesList = () => (
  <div>
    <div className="p-2 text-bold">
      {' '}
      <FontAwesomeIcon icon={faAngleDoubleLeft} className="mx-1" />
      2021
    </div>
    {/* Counties list */}
    <Countries />
  </div>
);

export default CountriesList;
