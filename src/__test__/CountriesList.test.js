import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../redux/configureStore';
import Country from '../components/countries/Country';
import '@testing-library/jest-dom';

beforeEach(() => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Country
          key="france"
          id="1"
          carteName="france"
          name="France"
          todayConfirmed={333}
          todayNewConfirmed={54}
        />
      </BrowserRouter>
    </Provider>,
  );
});
afterEach(cleanup);
describe('country components testing', () => {
  test('France country displaying in the browser', () => {
    screen.getByText('France');
    expect(screen.getByText('54 Cases')).toBeInTheDocument();
    expect(screen.getByRole('img')).toBeInTheDocument();
  });
});
