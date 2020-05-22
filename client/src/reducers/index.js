import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import profile from './profile';
import post from './post';

//turns an object into a single reducing function
export default combineReducers({
  alert,
  auth,
  profile,
  post,
});
