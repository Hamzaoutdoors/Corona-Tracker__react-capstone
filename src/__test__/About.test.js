import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../redux/configureStore';
import About from '../pages/About';

test('About page renders properly', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <BrowserRouter>
          <About />
        </BrowserRouter>
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
