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
      const newState = {...state, bookmarks: [...state.bookmarks, action.payload] }
      localStorage.setItem('bookmarks',JSON.stringify(newState.bookmarks))
      return newState

    }
    case REMOVE_BOOKMARK: {
      console.log("Bookmarks: ", state.bookmarks, "payload: ", action.payload)
      const address = action.payload
      const bookmarks = state.bookmarks.filter(item => address !== item)
      localStorage.setItem('bookmarks', JSON.stringify(bookmarks))
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