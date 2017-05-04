import axios from 'axios';
import { AUTH_USER, AUTH_ERROR, FETCH_RESTAURANT } from './types.js';

/*
export const FETCH_RESTAURANT = 'FETCH_RESTAURANT';
export function fetchRestaurant(area) {
  const request = axios.post('/search', { area });

  return {
    type: FETCH_RESTAURANT,
    payload: request
  }
  
}
*/

export function fetchRestaurant(area) {
  return function(dispatch) {
    axios.post('/search', { area })
      .then((resp) => {
        dispatch({
          type: FETCH_RESTAURANT,
          payload: resp.data
        })
      })
      .catch((err) => {
        console.log(err);
      })
  }
  
}

export function login({email, password}) {
  return function(dispatch) {
    axios.post('/login', {email, password})
      .then((resp) => {
        dispatch({ AUTH_USER });
        localStorage.setItem('token', resp.data.token);
      })
      .catch(() => {
        dispatch(authError('Bad Login Info'));
      });
  }
}

export function register({email, password}) {
  return function(dispatch) {
    axios.post('/register: actions', {email, password})
      .then((resp) => {
        dispatch({ AUTH_USER });
        localStorage.setItem('token', resp.data.token);
      })
      .catch(() => {
        dispatch(authError('Bad Login Info'));
      });
  }
}

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  }
}