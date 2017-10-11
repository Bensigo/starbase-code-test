import {createStore, applyMiddleware} from 'redux'
import logger from 'redux-logger'
import promise from 'redux-promise-middleware'
import {addBookmark, removeBookmark, activeBookmark} from './actions/bookmarkActions'

import {appReducer} from './reducer'

const middleware = applyMiddleware(logger, promise())

export const store = createStore(appReducer, middleware)



store.dispatch(addBookmark('vckdlcshuchsgchslkciou'))
store.dispatch(addBookmark('gchbfvkloiushcmdgiuhdf'))
store.dispatch(activeBookmark('gchbfvkloiushcmdgiuhdf'))
 store.dispatch(addBookmark('gchbfvkloiushcmdgiuhdf'))
store.dispatch(removeBookmark('vckdlcshuchsgchslkciou'))
store.dispatch(addBookmark('gcdivuyhcdloiuhckdji'))