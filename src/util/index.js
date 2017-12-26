module.exports = {
  capitalizeFirstLetter: str => {
    return str.charAt(0).toUpperCase() + str.slice(1)
  },
  limitString: (str, limit) => {
    return str.length >= limit ? str.substring(0,limit) + '...' : str.substring(0,limit)
  }
}
