import axios from 'axios';
import { setFlats, setHouses, setStreets } from '../redux/actions/addresses';
import { setClients } from '../redux/actions/housingStock';

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

export const getHouses  = (id) => (dispatch) => {
  instance.get(`/Request/houses/${id}`)
    .then(response => {
      dispatch(setHouses(response.data));
    });
};

export const getFlats  = (id) => (dispatch) => {
  instance.get(`/Request/house_flats/${id}`)
    .then(response => {
      dispatch(setFlats(response.data));
    });
};

export const getClients  = () => (dispatch) => {
  instance.get('/HousingStock/clients')
    .then(response => {
      dispatch(setClients(response.data));
    });
};


