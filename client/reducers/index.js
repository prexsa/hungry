import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import restaurantReducer from './reducer_restaurant.js';
import authReducer from './reducer_auth.js';

const rootReducer = combineReducers({
  restaurants: restaurantReducer,
  auth: authReducer,
  form
});

export default rootReducer;