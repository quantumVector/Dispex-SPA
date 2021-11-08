import { combineReducers } from 'redux';

import addresses from './addresses';
import housingStock from './housingStock';

const rootReducer = combineReducers({
  addresses,
  housingStock,
});

export default rootReducer;