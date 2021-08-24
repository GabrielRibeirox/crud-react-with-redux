import * as types from '../types';


const initialState = [{ title: '', content: '', authorPost: '', isActive: true }]
export default function posts(state = initialState, action) {

  switch (action.type) {
    case types.POST_CREATE: {

      const newState =
        [...state,
        {
          id: state.length,
          title: action.payload.title,
          content: action.payload.content,
          authorPost: action.payload.username,
          isActive: true,
        }
        ]

      return newState;
    }
    case types.POST_UPDATE: {
      return state.map(i => {
        if (i.id === action.payload.id) {
          i.title = action.payload.newTitle;
          i.content = action.payload.newContent;
        }
        return i;
      })

    }
    case types.POST_DELETE: {

      return state.filter((i) => { return i.id !== action.payload.id; });
    }


    default: {
      return state;
    }
  }
};
