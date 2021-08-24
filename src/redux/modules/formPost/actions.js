import * as types from '../types';
export function formCreate(title, content, username, isActive) {
  return {
    type: types.POST_CREATE,
    payload: {
      title,
      content,
      username,
      isActive
    }
  }
}
export function formUpdate(id, newTitle, newContent) {
  return {
    type: types.POST_UPDATE,
    payload: {
      id,
      newTitle,
      newContent
    }
  }
}
export function formDelete(id) {
  return {
    type: types.POST_DELETE,
    payload: {
      id
    }
  }
}