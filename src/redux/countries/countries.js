import fetchCountries from '../../utils/countries-api';

const FETCH_COUNTRIES = 'narrativa/countries/FETCH_COUNTRIES';
const GET_COUNTRIES = 'narrativa/countries/GET_COUNTRIES';
const API_SUCCESS = 'narrativa/countries/API_SUCCESS';
const API_FAILURE = 'narrativa/countries/API_FAILURE';

const initialState = [];

export const fetchCountriesAction = () => (dispatch) => {
  dispatch({ type: FETCH_COUNTRIES });
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
      return [...action.countries];
    default:
      return state;
  }
};

export default countiresReducer;
