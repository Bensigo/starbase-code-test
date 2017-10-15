import {combineReducers} from 'redux'

import bookmarkReducer from './bookmark'
import {getEtherReducer} from './etherPrice'

export const appReducer = combineReducers({
  bookmarks: bookmarkReducer,
  getEther: getEtherReducer
})
