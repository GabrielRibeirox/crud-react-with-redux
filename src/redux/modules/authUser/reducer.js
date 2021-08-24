import * as types from '../types';

const initialState = { username: '' }

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.ENTER_SUCCESS: {
      return { username: action.payload.username };

    }
    case types.ENTER_FAILURE: {
      const newState = { ...state };
      console.log('fail');
      return newState;
    }
    case types.ENTER_REQUEST: {
      console.log('reques');
      return state
    }


    default: {
      return state;
    }
  }
};
