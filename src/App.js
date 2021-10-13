import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import CountriesList from './pages/CountriesList';
import RegionsList from './pages/RegionsList';
import { fetchCountriesAction } from './redux/countries/countries';
import Error from './components/Error';
import Nav from './pages/Nav';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCountriesAction());
  }, []);

  return (
    <Router>
      <main className="App-container">
        <Nav />
        <Switch>
          <Route path="/" exact component={CountriesList} />
          <Route path="/country/:id" component={RegionsList} />
          <Route path="*" component={Error} />
        </Switch>
      </main>
    </Router>
  );
};

export default App;
