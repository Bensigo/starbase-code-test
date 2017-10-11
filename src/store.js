import {createStore, applyMiddleware} from 'redux'
import logger from 'redux-logger'
import promise from 'redux-promise-middleware'

import {appReducer} from './reducer'

const middleware = applyMiddleware(logger, promise())

export const store = createStore(appReducer, middleware)