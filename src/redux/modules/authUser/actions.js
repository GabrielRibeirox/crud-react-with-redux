import * as types from '../types';
export function enterRequest(username) {
  return {
    type: types.ENTER_SUCCESS,
    payload: {
      username
    }
  }
}
export function enterSuccess() {
  return {
    type: types.ENTER_REQUEST,
  }
}
export function enterFailure() {
  return {
    type: types.ENTER_FAILURE,
  }
}