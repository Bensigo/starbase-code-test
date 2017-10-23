import axios from 'axios'
// actions types for transaction
export const FETCHING_TRANSACTIONS = 'FETCHING_TRANSACTION'
export const FETCHED_TRANSACTIONS = 'FETCHED_TRANSACTIONS'

export const FETCHING_TRANSACTION_FAILED= 'FETCHING_TRANSACTION_FAILED'

// set base endpoint url
const Base_URL = "https://api.etherscan.io/api?module"

// API KEY 
const API_KEY = "KHB91YR3V73A3HVHH34CR2RNM9S2JC74B8"

export function getTransactions(address){
  const url =  `${Base_URL}=account&action=txlist&address=${address}&startblock=0&endblock=99999999&page=1&offset=10sort=asc&apikey=${API_KEY}`
  return (dispatch) => {
    dispatch({type: FETCHING_TRANSACTIONS})
    axios.get(url)
    .then(response => {
      dispatch({type: FETCHED_TRANSACTIONS, payload: response.data.result})
    })
    .catch(err => {
      dispatch({type: FETCHING_TRANSACTION_FAILED, payload: err})
    })
  }
}
