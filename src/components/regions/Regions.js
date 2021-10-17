import React, { useEffect, useState } from 'react';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import Pagination from 'react-bootstrap/Pagination';
import Region from './Region';
import Header from '../Header';
import Loading from '../Loading';
import { fetchCountriesAction } from '../../redux/countries/countries';

const Regiones = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { countries, loaded } = useSelector((state) => state.countries, shallowEqual);
  const [regions, setRegions] = useState(null);
  const [activePage, setActivePage] = useState(1);

  useEffect(() => {
    dispatch(fetchCountriesAction());
    if (loaded) {
      const countryObj = countries.filter((obj) => obj.id === id);
      // Non camelCase are needed here since they're used by the Narrativa API.
      /* eslint-disable camelcase */
      const regionsData = countryObj[0].regions.map(({
        id, name, today_new_confirmed, today_new_deaths, date,
      }) => ({
        date,
        id,
        name,
        todayNewConfirmed: today_new_confirmed || 0,
        todayNewDeaths: today_new_deaths || 0,
      }));
      setRegions(regionsData);
    } else {
      setRegions(null);
    }
  }, [id, loaded]);

  useEffect(() => {
    setActivePage(1);
    return null;
  }, [regions]);

  if (!regions) {
    return (
      <>
        <h2 className="section-title">Loading... </h2>
        <Loading />
      </>
    );
  }
  const cardsPerPage = 6;
  const lastPage = Math.ceil(regions.length / cardsPerPage);

  const total = regions.reduce((acc, curr) => acc + curr.todayNewConfirmed, 0);
  const renderList = () => {
    const result = [];
    for (
      let i = (activePage - 1) * cardsPerPage;
      i < Math.min(cardsPerPage * activePage, regions.length);
      i += 1) {
      result.push(
        <Region
          key={regions[i].id}
          item={i}
          id={regions[i].id}
          name={regions[i].name}
          todayNewDeaths={regions[i].todayNewDeaths}
          todayNewConfirmed={regions[i].todayNewDeaths}
        />,
      );
    }
    return result;
  };
  const pagination = () => {
    const items = [];
    const item = (i) => (
      <Pagination.Item key={`page-${i}`} active={activePage === i} onClick={() => setActivePage(i)} className="pageNum">
        {i}
      </Pagination.Item>
    );
    if (lastPage < 8) {
      for (let i = 1; i <= lastPage; i += 1) {
        items.push(item(i));
      }
    } else {
      items.push(item(1));
      items.push(<Pagination.Ellipsis key="ellipsis-1" />);
      if (activePage === 1 || activePage === 2) {
        for (let i = 2; i <= 4; i += 1) {
          items.push(item(i));
        }
      } else if (activePage === lastPage || activePage === lastPage - 1) {
        for (let i = lastPage - 3; i <= lastPage - 1; i += 1) {
          items.push(item(i));
        }
      } else {
        for (let i = activePage - 1; i <= activePage + 1; i += 1) {
          items.push(item(i));
        }
      }
      items.push(<Pagination.Ellipsis key="ellipsis-2" />);
      items.push(item(lastPage));
    }

    return items;
  };

  return (
    <div>
      {' '}
      <Header total={`${total} Cases`} title={id.toUpperCase()} carteName={id} />
      <h3 className="middle-title">{`REGIONS BREAKDOWN - ${regions[0].date}`}</h3>
      <Pagination className="d-flex justify-content-center my-3" size="sm" variant="warning">
        {pagination()}
      </Pagination>
      <div className="regions-container">
        {renderList()}
      </div>
    </div>
  );
};

export default Regiones;
