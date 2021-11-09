import axios from 'axios';
import { setFlats, setHouses, setStreets } from '../redux/actions/addresses';
import { setClients } from '../redux/actions/housingStock';

const instance = axios.create({
  baseURL: 'https://dispex.org/api/vtest',
  headers: {
    'API-KEY': 'Bearer glacier165945',
  },
});

export const getStreets = () => (dispatch) => {
  instance.get('/Request/streets')
    .then(response => dispatch(setStreets(response.data)));
};

export const getHouses = (id) => (dispatch) => {
  instance.get(`/Request/houses/${id}`)
    .then(response => dispatch(setHouses(response.data)));
};

export const getFlats = (id) => (dispatch) => {
  instance.get(`/Request/house_flats/${id}`)
    .then(response => dispatch(setFlats(response.data)));
};

export const addClient = ({ id, phone, email, name, bindId }) => (dispatch) => {
  instance.post('/HousingStock/client', { id, phone, email, name, bindId })
    .then(response => dispatch(bindClient(bindId, response.data.id)));
};

export const bindClient = (addressId, clientId) => (dispatch) => {
  instance.put('/HousingStock/bind_client', { addressId, clientId })
    .then(response => dispatch(getClients(addressId)));
};

export const getClients = (addressId) => (dispatch) => {
  instance.get(`/HousingStock/clients?addressId=${addressId}`)
    .then(response => dispatch(setClients(response.data)));
};

export const deleteClient = (id) => (dispatch) => {
  instance.delete(`/HousingStock/bind_client/${id}`);
};

