import {
    ETHER_PRICE_PENDING,
    ETHER_PRICE_REJECTED,
    ETHER_PRICE_FULFILLED
      } from '../actions/etherPrice'

const initialState  = {
  fetching: false,
  fetched: false,
  price: {},
  error: null

}


export function getEtherReducer(state=initialState, action) {
  switch(action.type){
    case ETHER_PRICE_PENDING: {
      return {...state, fetching: true}
    }
    case ETHER_PRICE_FULFILLED: {
      console.log(action.payload)
      return {...state, fetching: false, fetched: true, price: action.payload.data.result}
    }
    case ETHER_PRICE_REJECTED: {
      return {...state, fetching: false, error:action.payload}
    }
    default:
      return state
  }
}
