import React from 'react';
import PropTypes from 'prop-types';

const Header = ({
  title, total, carteName,
}) => (
  <div className="page-header">
    <div className="header-image">
      <img src={`/cartes/${carteName}.svg`} alt="cart" />
    </div>
    <div className="header-body">
      <h2>{title}</h2>
      <p>
        {total}
      </p>
    </div>
  </div>
);

export default Header;

Header.propTypes = {
  title: PropTypes.string.isRequired,
  total: PropTypes.string.isRequired,
  carteName: PropTypes.string.isRequired,
};
