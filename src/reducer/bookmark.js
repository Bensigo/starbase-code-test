import {ACTIVE_BOOKMARK,ADD_BOOKMARK,REMOVE_BOOKMARK} from '../actions/bookmarkActions'

const initialstate = {
  bookmark: [],
  activeBookmark: ''
}

const bookmarkReducder = (state=initialstate, action) => {
  switch(action.type){
    case ACTIVE_BOOKMARK: {
      return {...state, activeBookmark: action.payload}
      break
    }
    case ADD_BOOKMARK: {
      return {...state, bookmark: [...state.bookmark, action.payload] }
      break
    }
    case REMOVE_BOOKMARK: {
      console.log(state)
      return {...state,bookmark: state.bookmark.filter(item => item !== action.payload)}
      break
    }
    default: 
      return state
  }
}
export default bookmarkReducder