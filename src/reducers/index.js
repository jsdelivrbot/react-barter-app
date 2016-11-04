import { combineReducers } from 'redux';
import AllItemsReducer from './reducer_all_items';
import {reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  items: AllItemsReducer, 
  form: formReducer
});

export default rootReducer;
