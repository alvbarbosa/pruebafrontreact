import { combineReducers } from "redux";
import { reducer as reduxFormReducer } from 'redux-form';

import authReducer from './auth';

export default combineReducers({
  form: reduxFormReducer,
  authReducer
})