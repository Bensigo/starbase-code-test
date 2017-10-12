import {ACTIVE_BOOKMARK,ADD_BOOKMARK,REMOVE_BOOKMARK} from '../actions/bookmarkActions'

const initialstate = {
  bookmark: [],
  activeBookmark: ''
}

const bookmarkReducder = (state=initialstate, action) => {
  switch(action.type){
    case ACTIVE_BOOKMARK: {
      return {...state, activeBookmark: action.payload}
    }
    case ADD_BOOKMARK: {
      return {...state, bookmark: [...state.bookmark, action.payload] }
    }
    case REMOVE_BOOKMARK: {
      console.log(state)
      return {...state,bookmark: state.bookmark.filter(item => item !== action.payload)}
    }
    default: 
      return state
  }
}
export default bookmarkReducder