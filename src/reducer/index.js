import {combineReducers} from 'redux'

import bookmarkReducer from './bookmark'
import {getEtherReducer} from './etherPrice'
import {transactionReducer} from './transaction'

export const appReducer = combineReducers({
  bookmarks: bookmarkReducer,
  getEther: getEtherReducer,
  transactions: transactionReducer
})
