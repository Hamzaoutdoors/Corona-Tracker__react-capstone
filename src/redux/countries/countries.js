import fetchCountries from '../../utils/countries-api';
import fetchCountry from '../../utils/filterCountries-api';

const FETCH_COUNTRIES = 'narrativa/countries/FETCH_COUNTRIES';
const FETCH_COUNTRY = 'narrativa/countries/FETCH_COUNTRY';
const GET_COUNTRIES = 'narrativa/countries/GET_COUNTRIES';
const FILTERED_COUNTRY = 'narrativa/countries/FILTERED_COUNTRY';
const API_SUCCESS = 'narrativa/countries/API_SUCCESS';
const API_FAILURE = 'narrativa/countries/API_FAILURE';

const initialState = { countries: [], loaded: false };

export const fetchCountriesAction = () => (dispatch) => {
  dispatch({ type: FETCH_COUNTRIES, loaded: false });
  return fetchCountries().then(
    (countries) => {
      dispatch({ type: API_SUCCESS });
      dispatch({ type: GET_COUNTRIES, countries });
    },
    (error) => {
      dispatch({ type: API_FAILURE, error });
    },
  );
};

export const fetchCountryAction = (name) => (dispatch) => {
  dispatch({ type: FETCH_COUNTRY, loaded: false });
  return fetchCountry(name).then(
    (country) => {
      dispatch({ type: API_SUCCESS });
      dispatch({ type: FILTERED_COUNTRY, country });
    },
    (error) => {
      dispatch({ type: API_FAILURE, error });
    },
  );
};

const countiresReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COUNTRIES:
      return { countries: [...action.countries], loaded: true };
    case FILTERED_COUNTRY:
      return { countries: [...action.country], loaded: true };
    default:
      return state;
  }
};

export default countiresReducer;
