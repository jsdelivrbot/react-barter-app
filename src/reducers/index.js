import { combineReducers } from 'redux';
import {reducer as FormReducer } from 'redux-form';

import AllItemsReducer from './reducer_all_items';
import UserReducer from './reducer_user';

const rootReducer = combineReducers({
  items: AllItemsReducer, 
  user: UserReducer,
  form: FormReducer
});

export default rootReducer;