import { combineReducers } from 'redux';

import list from './list';
import form from './form';

export default combineReducers({
  list,
  form,
})