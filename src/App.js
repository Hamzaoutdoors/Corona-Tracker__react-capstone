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
import Footer from './components/Footer';
import About from './pages/About';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCountriesAction());
  }, []);

  return (
    <Router>
      <main className="App-container">
        <Switch>
          <Route path="/" exact component={CountriesList} />
          <Route path="/country/:id" component={RegionsList} />
          <Route path="/about" component={About} />
          <Route path="*" component={Error} />
        </Switch>
      </main>
      <Footer className="flex-shrink-0 shadow d-flex align-items-center" />
    </Router>
  );
};

export default App;
