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
      console.log("Bookmarks: ", state.bookmarks, "payload: ", action.payload)
      const address = action.payload
      const bookmarks = state.bookmarks.filter(item => address !== item)
      return {
        ...state, 
        bookmarks: bookmarks
      }
    }
    default: 
      return state
  }
}
export default bookmarkReducder