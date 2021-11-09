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
    .then(response => {
      dispatch(setStreets(response.data));
    });
};

export const getHouses = (id) => (dispatch) => {
  instance.get(`/Request/houses/${id}`)
    .then(response => {
      dispatch(setHouses(response.data));
    });
};

export const getFlats = (id) => (dispatch) => {
  instance.get(`/Request/house_flats/${id}`)
    .then(response => {
      console.log(response)
      dispatch(setFlats(response.data));
    });
};

export const addClient = ({ id, phone, email, name, bindId }) => (dispatch) => {
  console.log({ id, phone, email, name, bindId })
  instance.post('/HousingStock/client', { id, phone, email, name, bindId })
    .then(response => {
      dispatch(bindClient(bindId, response.data.id));
    });
};

export const bindClient = (addressId, clientId) => (dispatch) => {
  console.log({ addressId, clientId })
  instance.put('/HousingStock/bind_client', { addressId, clientId }, {
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => {
      console.log(response)
      dispatch(getClients(addressId))
    });
};

export const getClients = (addressId) => (dispatch) => {
  console.log(addressId)
  instance.get(`/HousingStock/clients?addressId=${addressId}`)
    .then(response => {
      console.log(response)
      dispatch(setClients(response.data));
    });
};

export const deleteClient = (id) => (dispatch) => {
  console.log(id)
  instance.delete(`/HousingStock/bind_client/${id}`)
    .then(response => {
      console.log(response)
    });
};

