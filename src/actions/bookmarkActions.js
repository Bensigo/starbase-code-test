export const ADD_BOOKMARK = 'ADD_BOOKMARK'
export const REMOVE_BOOKMARK = 'REMOVE_BOOKMARK'
export const ACTIVE_BOOKMARK = 'ACTIVE_BOOKMARK'

export function addBookmark(address) {
  return {
    type: ADD_BOOKMARK,
    payload:address
  }
}

export function removeBookmark(address) {
  return {
    type: REMOVE_BOOKMARK,
    payload:address
  }
}

export function activeBookmark(address){
  return{
    type: ACTIVE_BOOKMARK,
    payload:address
  }
}