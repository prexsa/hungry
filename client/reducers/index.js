import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import restaurantReducer from './reducer_restaurant.js';
import authReducer from './reducer_auth.js';
import reviewsReducer from './reducer_reviews.js';
import hoursReducer from './reducer_hours.js';
import yelpLinkReducer from './reducer_yelplink.js';

const rootReducer = combineReducers({
  auth: authReducer,
  restaurants: restaurantReducer,
  form,
  reviews: reviewsReducer,
  hours: hoursReducer,
  yelp: yelpLinkReducer
});

export default rootReducer;