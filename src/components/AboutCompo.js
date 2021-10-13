import React from 'react';
import { Container } from 'react-bootstrap';
import Header from './Header';

const AboutComponent = () => (
  <div>
    {' '}
    <Header total="" title="About US" carteName="globe" />
    <Container className="countries-container">
      <h1 className="my-4 shadow">About COVID19 API</h1>
      <p>
        The full API dataset is updated each day between
        {' '}
        <strong> 1PM </strong>
        {' '}
        and
        <strong> 3PM </strong>
        {' '}
        CET with additional updates throughout the day.
      </p>
      <p>Data is provided by the following institutions:</p>
      <ul>
        <li>
          <a href="https://systems.jhu.edu/research/public-health/ncov/">Johns Hopkins University</a>
        </li>
        <li>
          <a href="https://github.com/pcm-dpc/COVID-19">Dipartimento della Protezione Civile of Italy</a>
        </li>
        <li>
          <a href="https://www.rki.de/DE/Content/InfAZ/N/Neuartiges_Coronavirus/Situationsberichte/Gesamt.html">Robert Koch Institute of Germany</a>
        </li>
        <li>
          <a href="https://www.mscbs.gob.es/profesionales/saludPublica/ccayes/alertasActual/nCov/situacionActual.htm">Ministry of Health Spain</a>
        </li>
        <li>
          <a href="https://www.santepubliquefrance.fr/dossiers/coronavirus-covid-19">Santé publique France</a>
        </li>
      </ul>
    </Container>
  </div>
);

export default AboutComponent;
