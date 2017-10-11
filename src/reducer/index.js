import {combineReducers} from 'redux'

import bookmarkReducer from './bookmark'

export const appReducer = combineReducers({
  bookmark: bookmarkReducer
})
