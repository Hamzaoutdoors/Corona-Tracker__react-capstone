import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import {
  render, fireEvent, screen,
} from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import store from '../redux/configureStore';
import Countries from '../components/countries/Countries';
import CountriesList from '../pages/CountriesList';
import DropdownFilter from '../components/DropdownFilter';
import { fetchCountriesAction } from '../redux/countries/countries';
import '@testing-library/jest-dom';

jest.mock('../utils/countries-api');

describe('Home page tests', () => {
  test('Countries page matches snapshot', async () => {
    await store.dispatch(fetchCountriesAction());
    const countriesPage = renderer
      .create(
        <Provider store={store}>
          <BrowserRouter>
            <Countries />
          </BrowserRouter>
        </Provider>,
      )
      .toJSON();
    expect(countriesPage).toMatchSnapshot();
  });

  describe('display europe countries', () => {
    test('Countries page interaction', () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <Countries />
          </BrowserRouter>
        </Provider>,
      );
      screen.queryAllByRole('link').forEach((role) => expect(role).toBeInTheDocument());
    });
    test('Fire filter event', () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <CountriesList />
          </BrowserRouter>
        </Provider>,
      );
      fireEvent.select(screen.getByTestId('button-germany'));
      expect(screen.getByText('Germany')).toBeInTheDocument();
    });
  });
  test('dropdown displayed properly ', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <BrowserRouter>
            <DropdownFilter />
          </BrowserRouter>
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
