const initialState = {
  streets: [],
};

const addresses = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_STREETS':
      return {
        ...state,
        streets: action.payload,
      };

    default:
      return state;
  }
};

export default addresses;