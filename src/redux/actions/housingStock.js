export const setClients = (items) => ({
  type: 'SET_CLIENTS',
  payload: items,
});

export const removeClientDisplay = (id) => ({
  type: 'REMOVE_CLIENT',
  id,
});

export const enableEditMod = (item) => ({
  type: 'ENABLE_EDIT_MOD',
  item,
});

export const disableEditMod = () => ({
  type: 'DISABLE_EDIT_MOD',
});