import { combineReducers } from 'redux';
import RestaurantReducer from './reducer_restaurant.js';

const rootReducer = combineReducers({
  restaurants: RestaurantReducer
});

export default rootReducer;