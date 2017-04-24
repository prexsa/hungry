import axios from 'axios';

export const FETCH_RESTAURANT = 'FETCH_RESTAURANT';

export function fetchRestaurant(area) {
  const request = axios.post('/search', {term: 95051});

  return {
    type: FETCH_RESTAURANT,
    payload: request
  }
  
}
