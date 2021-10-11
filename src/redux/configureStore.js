import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const reducer = combineReducers({
  /* data :  reducerName */
});

const store = createStore(
  reducer,
  applyMiddleware(thunk, logger),
);

export default store;
