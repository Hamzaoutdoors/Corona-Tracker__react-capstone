/* eslint-disable react/prop-types */
import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';

const Country = ({
  id, name, todayNewConfirmed, carteName,
}) => {
  const numberFormat = (x) => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return (
    <motion.div
      className={`div-${id} d-flex flex-column`}
      initial={{
        opacity: 0,
        translateX: id % 2 === 0 ? -50 : 50,
        translateY: -50,
      }}
      animate={{
        opacity: 1,
        translateX: 0,
        translateY: 0,
      }}
      transition={{
        duration: 0.3,
        delay: id * 0.3,
      }}
    >
      <FontAwesomeIcon icon={faArrowCircleRight} className="arrow-icon" />
      <div className="country-image">
        <img alt="country-img" src={`./cartes/${carteName}.svg`} />
      </div>
      <div
        className="country-body"
      >
        <h2
          className="p-0"
          data-testid="country-test"
        >
          {name}

        </h2>
        <p className="p-0" data-content={`${numberFormat(todayNewConfirmed)} Cases`}>{`${numberFormat(todayNewConfirmed)} Cases`}</p>
      </div>
    </motion.div>
  );
};

export default Country;
