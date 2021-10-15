import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../redux/configureStore';
import Region from '../components/regions/Region';
import '@testing-library/jest-dom';

beforeEach(() => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Region
          id="reunion"
          name="Reunion"
          todayNewConfirmed={500}
          todayNewDeaths={3}
        />
      </BrowserRouter>
    </Provider>,
  );
});
afterEach(cleanup);
describe('region components testing', () => {
  test('Reunion region displaying in the browser', () => {
    screen.getByText('Reunion');
    expect(screen.getByText('500 Cases')).toBeInTheDocument();
    expect(screen.getByText('3 Deaths')).toBeInTheDocument();
    expect(screen.getByText('Reunion')).toBeInTheDocument();
    expect(screen.getByTestId('Reunion')).toHaveTextContent('Reunion');
  });
});
