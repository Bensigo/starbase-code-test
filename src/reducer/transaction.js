import {
  FETCHED_TRANSACTIONS,
  FETCHING_TRANSACTIONS,
  FETCHING_TRANSACTION_FAILED
} from '../actions/transaction'

const initialState = {
  loading: false,
  fetching: false,
  fetched: false,
  transactions: [],
  error: null
}

export function transactionReducer(state=initialState, action) {
  switch(action.type){
    case FETCHING_TRANSACTIONS: {
      return {...state, fetching: true}
    }
case FETCHING_TRANSACTION_FAILED: {
      return {...state, fetching: false, error: action.payload}
    }
    case FETCHED_TRANSACTIONS: {
      return {...state, fetched: true, fetching: false, transactions: action.payload}
    }
    default:
      return state
  }
}
