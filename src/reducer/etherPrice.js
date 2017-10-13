import {
    GET_ETHER_PRICE,
    GET_ETHER_PRICE_REJECTED,
    GET_ETHER_PRICE_START,
    CHANGE_ETH_PRICE,
      } from '../actions/etherPrice'

const initialState  = {
  fetching: false,
  fetched: false,
  etherPrice: {
    eth: '',
    btc: '',
    usd: '',
  },
  error: null

}

export function getEtherReducer(state=initialState, action) {
  switch(action.type){
    case GET_ETHER_PRICE_START: {
      return {...state, fetching: true}
    }
    case GET_ETHER_PRICE_REJECTED: {
      return {...state, fetching:false, error: action.payload}
    }
    case GET_ETHER_PRICE: {
      const price = action.payload.result
      localStorage.setItem('usd', price.ethusd)
      localStorage.setItem('btc', price.ethbtc)
      console.log(price)
      return {
          ...state, 
          fetching: false,
          fetched: true, 
          etherPrice: {
            eth: '1',
            btc: price.ethbtc,
            usd: price.ethusd
          }}
          
    }
    case CHANGE_ETH_PRICE: {
      return {...state, etherPrice: {eth: action.payload.eth, btc: action.payload.btc, usd: action.payload.usd}}
    }
    default:
      return state
  }
}
