const initialState = {
  streets: [],
  houses: [],
  flats: [],
};

const addresses = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_STREETS':
      return {
        ...state,
        streets: action.payload,
      };

    case 'SET_HOUSES':
      return {
        ...state,
        houses: action.payload,
      };

    case 'SET_FLATS':
      return {
        ...state,
        flats: action.payload,
      };

    default:
      return state;
  }
};

export default addresses;