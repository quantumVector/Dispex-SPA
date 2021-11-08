
const initialState = {
  clients: [],
};

const housingStock = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CLIENTS':
      return {
        ...state,
        clients: action.payload,
      };

    default:
      return state;
  }
};

export default housingStock;