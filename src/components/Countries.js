import React from 'react';
import Country from './Country';

const Countries = () => (
  <>
    <div className="countries-container">
      {[1, 2, 3, 4].map((country) => (
        <Country key={country} id={country} />
      ))}
    </div>
  </>
);

export default Countries;
