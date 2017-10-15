import {ACTIVE_BOOKMARK,ADD_BOOKMARK,REMOVE_BOOKMARK} from '../actions/bookmarkActions'

const initialstate = {
  bookmarks: [],
  activeBookmark: ''
}

const bookmarkReducder = (state=initialstate, action) => {
  switch(action.type){
    case ACTIVE_BOOKMARK: {
      return {...state, activeBookmark: action.payload}
    }
    case ADD_BOOKMARK: {
      return {...state, bookmarks: [...state.bookmarks, action.payload] }
    }
    case REMOVE_BOOKMARK: {
      console.log(state)
      return {...state,bookmarks: () => {
        const index = state.bookmarks.indexOf(action.payload)
        if (index > -1){
          state.splice(index, 1)
        }
      }}
    }
    default: 
      return state
  }
}
export default bookmarkReducder