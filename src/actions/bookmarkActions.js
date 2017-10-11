export const ADD_BOOKMARK = 'ADD_BOOKMARK'
export const REMOVE_BOOKMARK = 'REMOVE_BOOKMARK'

export function addBookmark(address) {
  return {
    type: ADD_BOOKMARK,
    address
  }
}

export function removeBookmark(address) {
  return {
    type: REMOVE_BOOKMARK,
    address
  }
}