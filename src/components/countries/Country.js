/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';

const Country = ({
  id, name, todayNewConfirmed, carteName,
}) => {
  const numberFormat = (x) => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return (
    <Link
      to={`/country/${carteName}`}
      className={`div div-${id} d-flex flex-column`}
    >
      <FontAwesomeIcon icon={faArrowCircleRight} className="arrow-icon" />
      <div className="country-image">
        <img alt="country-img" src={`./cartes/${carteName}.svg`} />
      </div>
      <div className="country-body">
        <h2 className="p-0">{name}</h2>
        <p className="p-0" data-content={`${numberFormat(todayNewConfirmed)} Cases`}>{`${numberFormat(todayNewConfirmed)} Cases`}</p>
      </div>
    </Link>
  );
};

export default Country;
