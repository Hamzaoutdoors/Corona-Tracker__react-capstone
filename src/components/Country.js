/* eslint-disable react/prop-types */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';

const Country = ({ id }) => (
  <div className={`div div-${id} d-flex flex-column`}>
    <FontAwesomeIcon icon={faArrowCircleRight} className="arrow-icon" />
    <div className="country-image">
      <img alt="country-img" src="./cartes/spain-carte.svg" />
    </div>
    <div className="country-body">
      <h2 className="p-0">EUROPE</h2>
      <p className="p-0">9.999 Cases</p>
    </div>
  </div>
);

export default Country;
