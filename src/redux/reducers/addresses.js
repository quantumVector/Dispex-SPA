const initialState = {
  streets: [],
  houses: [],
  flats: [],
  selectedStreet: '',
  selectedHouse: '',
  selectedFlat: '',
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

    case 'SELECT_STREET':
      const street = state.streets.find(item => item.id === action.id);
      return {
        ...state,
        selectedStreet: street.name,
      };

    case 'SELECT_HOUSE':
      const house = state.houses.find(item => item.id === action.id);
      return {
        ...state,
        selectedHouse: house.name,
      };

    case 'SELECT_FLAT':
      const flat = state.flats.find(item => item.id === action.id);
      return {
        ...state,
        selectedFlat: flat.name,
      };

    default:
      return state;
  }
};

export default addresses;