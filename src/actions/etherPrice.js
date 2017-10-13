 import axios from 'axios'
// export const CURRENT_CURRENCY = 'CURRENT_CURRENCY'
export const GET_ETHER_PRICE = "GET_ETHER_PRICE"
export const GET_ETHER_PRICE_REJECTED = "GET_ETHER_PRICE_REJECTED "
export const GET_ETHER_PRICE_START = "GET_ETHER_PRICE_START"
export const CHANGE_ETH_PRICE = "CHANGE_ETH_PRICE"


// set base endpoint url
const Base_URL = "https://api.etherscan.io/api?module"

// API KEY 
const API_KEY = "KHB91YR3V73A3HVHH34CR2RNM9S2JC74B8"

const url = `${Base_URL}=stats&action=ethprice&apikey=${API_KEY}`


// get the current ether price 
export function getEtherPrice () {
  return function (dispatch)  {
    dispatch({type: GET_ETHER_PRICE_START})
    axios.get(url)
    .then((response) => {
      console.log(response)
      dispatch({type: GET_ETHER_PRICE, payload: response.data})
    })
    .catch(err => {
      dispatch({type: GET_ETHER_PRICE_REJECTED, payload: err})
    })
  }
}

export function changeEthPrice(eth) {
  return {
    type: CHANGE_ETH_PRICE,
    payload: eth
  }
}
