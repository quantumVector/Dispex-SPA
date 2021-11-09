export const setClients = (items) => ({
  type: 'SET_CLIENTS',
  payload: items,
});

export const removeClientDisplay = (id) => ({
  type: 'REMOVE_CLIENT',
  id,
});