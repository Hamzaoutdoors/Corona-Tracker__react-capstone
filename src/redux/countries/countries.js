import fetchCountries from '../../utils/countries-api';

const FETCH_COUNTRIES = 'narrativa/countries/FETCH_COUNTRIES';
const GET_COUNTRIES = 'narrativa/countries/GET_COUNTRIES';
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

const countiresReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COUNTRIES:
      return { countries: [...action.countries], loaded: true };
    default:
      return state;
  }
};

export default countiresReducer;
