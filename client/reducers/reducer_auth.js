import { AUTH_USER, UNAUTH_USER, AUTH_ERROR, FETCH_MESSAGE } from '../actions/types.js';

export default function(state = {}, action) {
  switch(action.type) {
    case AUTH_USER:
      return { ...state, error: '', authenticated: true };
    case UNAUTH_USER:
      return { ...state, authenticated: false };
    case AUTH_ERROR:
      return { ...state, error: action.payload };
    case FETCH_MESSAGE:
      return { ...state, message: action.payload };
  }

  return state;
}

/*
export default function(state = [], action) {
  console.log("actions: ", action.type, " payload: ", action.payload);
  switch(action.type) {
    case AUTH_USER:
    console.log("actions1: ", action.type, " payload: ", action.payload);
      return [ action.payload, ...state ];
    case UNAUTH_USER: 
    console.log("actions2: ", action.type, " payload: ", action.payload);
      return [ action.payload, ...state ];
    case AUTH_ERROR:
    console.log("actions3: ", action.type, " payload: ", action.payload);
      return [ action.payload, ...state ];
    case FETCH_MESSAGE: 
    console.log("actions4: ", action.type, " payload: ", action.payload);
      return [ action.payload, ...state ];
  }
  return state;
}
*/