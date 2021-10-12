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

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCountriesAction());
  }, []);

  return (
    <Router>
      <main className="App-container">
        <Switch>
          <Route path="/" exact>
            <CountriesList />
          </Route>
          <Route path="/">
            <RegionsList />
          </Route>
          {/* <Route path="/profile">
            <Profile />
          </Route> */}
        </Switch>
      </main>
    </Router>
  );
};

export default App;
