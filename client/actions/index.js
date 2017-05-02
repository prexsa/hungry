import axios from 'axios';
import { browserHistory } from 'react-router';

import { AUTH_USER, AUTH_ERROR } from './types.js';

export const FETCH_RESTAURANT = 'FETCH_RESTAURANT';

export function fetchRestaurant(area) {
  const request = axios.post('/search', { area });

  return {
    type: FETCH_RESTAURANT,
    payload: request
  }
  
}

export function logIn({email, password}) {
  return function(dispatch) {
    console.log('email: ', email)
    axios.post('/login', {email, password})
      .then(resp => {
        dispatch({ type: AUTH_USER });
        localStorage.setItem('token', response.data.token);
        browserHistory.push('/dashboard');
      })
      .catch(() => {
        dispatch(authError('Bad Login Info'));
      });
  }
}

export function register({email, password}) {
  return function(dispatch) {
    console.log('register email: ', email);
  }
}

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  }
}