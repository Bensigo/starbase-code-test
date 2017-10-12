import axios from 'axios'

// set base endpoint url
const Base_URL = "https://api.etherscan.io/api?module"

// API KEY 
const API_KEY = "KHB91YR3V73A3HVHH34CR2RNM9S2JC74B8"

export const getEther = async () => {
  const url = `${Base_URL}=stats&action=ethprice&apikey=${API_KEY}`
  try{
    const result = await axios.get(url)
    return result
  }catch (err) {
    return err
  }
}

