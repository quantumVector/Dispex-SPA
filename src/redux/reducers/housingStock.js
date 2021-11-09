
const initialState = {
  clients: [],
  editMod: false,
  editableClient: '',
};

const housingStock = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CLIENTS':
      return {
        ...state,
        clients: action.payload,
      };

    case 'REMOVE_CLIENT':
      const cloneClients = JSON.parse(JSON.stringify(state.clients));
      const idx = state.clients.findIndex((item) => {
        return item.bindId === action.id;
      });
      cloneClients.splice(idx, 1);
      return {
        ...state,
        clients: cloneClients,
      };

    case 'ENABLE_EDIT_MOD':
      return {
        ...state,
        editMod: true,
        editableClient: action.item,
      };

    case 'DISABLE_EDIT_MOD':
      return {
        ...state,
        editMod: false,
        editableClient: '',
      };

    default:
      return state;
  }
};

export default housingStock;