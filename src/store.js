import {createStore, applyMiddleware} from 'redux'
import logger from 'redux-logger'
import promiseMiddleware from 'redux-promise-middleware'
import thunk from 'redux-thunk'
import {getEtherPrice} from './actions/etherPrice'
// import {addBookmark,removeBookmark} from './actions/bookmarkActions'
import {appReducer} from './reducer'



const middleware = applyMiddleware(logger, promiseMiddleware(), thunk)

export const store = createStore(appReducer, middleware)

console.log('price')



 store.dispatch(getEtherPrice())

//  // test 
// store.dispatch(addBookmark('ghdfgbndkifuyegnkfiue'))
// store.dispatch(addBookmark('djkjlfhgvndbmfnmju'))
// store.dispatch(removeBookmark('ghdfgbndkifuyegnkfiue'))
