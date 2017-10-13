import {combineReducers} from 'redux'

import bookmarkReducer from './bookmark'
import {getEtherReducer} from './etherPrice'

export const appReducer = combineReducers({
  bookmark: bookmarkReducer,
  getEther: getEtherReducer
})
