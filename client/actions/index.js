import axios from 'axios';

export const FETCH_RESTAURANT = 'FETCH_RESTAURANT';

export function fetchRestaurant(area) {
  const request = axios.post('/search', { area});

  return {
    type: FETCH_RESTAURANT,
    payload: request
  }
  
}
