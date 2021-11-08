const initialState = {
  items: [],
};

const addresses = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_STREETS':
      return {
        ...state,
        items: action.payload,
      };

    default:
      return state;
  }
};

export default addresses;