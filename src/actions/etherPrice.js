 import axios from 'axios'
// export const CURRENT_CURRENCY = 'CURRENT_CURRENCY'
export const ETHER_PRICE = "ETHER_PRICE"
export const ETHER_PRICE_PENDING = "ETHER_PRICE_PENDING"
export const ETHER_PRICE_REJECTED = "ETHER_PRICE_REJECTED"
export const ETHER_PRICE_FULFILLED = 'ETHER_PRICE_FULFILLED'


// set base endpoint url
const Base_URL = "https://api.etherscan.io/api?module"

// API KEY 
const API_KEY = "KHB91YR3V73A3HVHH34CR2RNM9S2JC74B8"

const url = `${Base_URL}=stats&action=ethprice&apikey=${API_KEY}`

// export function currentCurrency (currency) {
//     return {
//       type: CURRENCY,
//       payload:currency
//     }
// }

// get the current ether price 
export function getEtherPrice () {
  return {
    type: ETHER_PRICE,
    payload: axios.get(url)
  }
}