import { createStore, combineReducers } from 'redux';
import hotelReducer from './reducers/hotelReducer';

const rootReducer = combineReducers({
  hotels: hotelReducer,
});

const store = createStore(rootReducer);

export default store;
