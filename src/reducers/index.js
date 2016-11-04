import { combineReducers } from 'redux';
import AllItemsReducer from './reducer_all_items';

const rootReducer = combineReducers({
  items: AllItemsReducer
});

export default rootReducer;
