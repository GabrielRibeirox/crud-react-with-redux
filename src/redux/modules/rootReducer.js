import { combineReducers } from 'redux';
import login from './authUser/reducer'
import posts from './formPost/reducer'
export default combineReducers({
  login, posts
})