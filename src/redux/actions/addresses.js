import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://dispex.org/api/vtest',
  headers: {
    'API-KEY': 'Bearer glacier165945'
  }
});

export const getStreets  = () => (dispatch) => {
  instance.get('/Request/streets')
    .then(response => {
      dispatch(setStreets(response.data));
    });
};

export const setStreets = (items) => ({
  type: 'SET_STREETS',
  payload: items,
});

export const getHouses  = (id) => (dispatch) => {
  instance.get(`/Request/houses/${id}`)
    .then(response => {
      dispatch(setHouses(response.data));
    });
};

export const setHouses = (items) => ({
  type: 'SET_HOUSES',
  payload: items,
});