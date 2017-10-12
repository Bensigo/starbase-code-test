import {createStore, applyMiddleware} from 'redux'
import logger from 'redux-logger'
import promiseMiddleware from 'redux-promise-middleware'
import {getEtherPrice} from './actions/etherPrice'

import {appReducer} from './reducer'



const middleware = applyMiddleware(logger, promiseMiddleware())

export const store = createStore(appReducer, middleware)

console.log('price')



 store.dispatch(getEtherPrice())