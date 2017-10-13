
export const toBTC = (ether,btc) => {
    const result = parseFloat(ether) * parseFloat(btc) / 1
     console.log(result)
    return result.toString()
}

export const toUSD = (ether, usd) => {
  const result = parseFloat(ether) * parseFloat(usd)/ 1
  console.log(result)
  return result.toString()
}

export const tryToConvert = (amount, convert) => {
  const input = parseFloat(amount)
  if (Number.isNaN(input)) {
    return ''
  }
  const result = convert(input)
  return result.toString()
}