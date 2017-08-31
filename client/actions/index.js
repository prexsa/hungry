import axios from 'axios';
import { browserHistory } from 'react-router';
import { AUTH_USER, UNAUTH_USER, AUTH_ERROR, FETCH_MESSAGE, FETCH_RESTAURANT } from './types.js';

export function fetchRestaurant(area) {
  return function(dispatch) {
    console.log('area: ', area)
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
        dispatch({ type: AUTH_USER });
        localStorage.setItem('token', resp.data.token);
        browserHistory.push('/dashboard');
      })
      .catch((err) => {
        dispatch(authError('Bad Login Info, From Login'));
      });
  }
}

export function register({email, password}) {
  return function(dispatch) {
    axios.post('/register', {email, password})
      .then((resp) => {
        dispatch({ type: AUTH_USER });
        localStorage.setItem('token', resp.data.token);
        browserHistory.push('/dashboard');
      })
      .catch(() => {
        dispatch(authError('Bad Login Info, From Register'));
      });
  }
}

export function logout() {
  localStorage.removeItem('token');
  return function(dispatch) {
    dispatch({ type: UNAUTH_USER });
    browserHistory.push('/');
  }
}

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  }
}

export function fetchMessage() {
  return function(dispatch) {
    axios.get(ROOT_URL, {
      headers: { authorization: localStorage.getItem('token') }
    })
      .then(response => {
        dispatch({
          type: FETCH_MESSAGE,
          payload: response.data.message
        });
      });
  }
}