export const setStreets = (items) => ({
  type: 'SET_STREETS',
  payload: items,
});

export const setHouses = (items) => ({
  type: 'SET_HOUSES',
  payload: items,
});

export const setFlats = (items) => ({
  type: 'SET_FLATS',
  payload: items,
});

export const selectStreet = (id) => ({
  type: 'SELECT_STREET',
  id,
});

export const selectHouse = (id) => ({
  type: 'SELECT_HOUSE',
  id,
});

export const selectFlat = (id) => ({
  type: 'SELECT_FLAT',
  id,
});