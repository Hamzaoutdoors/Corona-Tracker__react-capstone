import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophone, faCog } from '@fortawesome/free-solid-svg-icons';

const Nav = () => (
  <div className="nav-icons">
    <FontAwesomeIcon icon={faMicrophone} className="mx-1" />
    <FontAwesomeIcon icon={faCog} className="mx-0" />
  </div>
);

export default Nav;
