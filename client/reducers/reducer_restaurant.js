import { FETCH_RESTAURANT } from '../actions/index.js';

export default function(state = [], action) {
  switch(action.type) {
    case FETCH_RESTAURANT:
      return [ action.payload.data, ...state ];
  }
  return state;
}