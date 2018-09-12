import { combineReducers } from "redux";
import { reducer as reduxFormReducer } from 'redux-form';

import authReducer from './auth';
import dataReducer from './data';

export default combineReducers({
  form: reduxFormReducer,
  authReducer,
  dataReducer
})