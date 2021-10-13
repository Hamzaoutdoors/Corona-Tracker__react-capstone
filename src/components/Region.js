/* eslint-disable react/prop-types */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';

const Region = ({
  name,
  todayNewConfirmed,
  todayNewDeaths,
  item,
}) => {
  const numberFormat = (x) => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return (
    <div className={`region-wrapper d-flex ${item % 2 === 0 ? 'bgPrimary' : 'bgSecondary'}`}>
      <div className="region-name">
        <h2 className="p-0">{name}</h2>
      </div>
      <div className="d-flex align-items-center text-align-center">
        <div className="region-body d-flex flex-column align-items-center">
          <p data-content={`${numberFormat(todayNewConfirmed)} Cases`} className="m-0">{`${numberFormat(todayNewConfirmed)} Cases`}</p>
          <p data-content={`${numberFormat(todayNewDeaths)} Deaths`} className="m-0">{`${numberFormat(todayNewDeaths)} Deaths`}</p>
        </div>
        <FontAwesomeIcon icon={faArrowCircleRight} className="region-icon" />
      </div>
    </div>
  );
};

export default Region;
