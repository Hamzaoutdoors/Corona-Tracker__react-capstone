import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => (
  <section className="section error-page">
    <div className="error-container">
      <h1>oops! it is a dead end</h1>
      <button className="btn btn-warning" type="button">
        <Link to="/">Back Home</Link>
      </button>
    </div>
  </section>
);

export default Error;
