import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import AboutComponent from '../components/AboutCompo';

const About = () => (
  <div className="d-flex flex-column">
    <div className="page-title">
      <p data-content="Coronavirus disease (COVID-19) pandemic">Coronavirus disease (COVID-19) pandemic</p>
    </div>
    <Link to="/" className="arrow my-2 ms-auto p-2">
      {' '}
      Go Back Home
      <FontAwesomeIcon icon={faAngleDoubleRight} className="mx-1" />
    </Link>
    {/* Counties list */}
    <AboutComponent />
  </div>
);

export default About;
