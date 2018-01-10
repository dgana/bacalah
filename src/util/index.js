module.exports = {
  capitalizeFirstLetter: str => {
    return str.charAt(0).toUpperCase() + str.slice(1)
  },
  limitString: (str, limit) => {
    return str.length >= limit ? str.substring(0,limit) + '...' : str.substring(0,limit)
  },
  newsDate: date => {
    let newsDate = new Date(date)
    let month = ['Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember']
    return newsDate.getDate() + ' ' + month[(newsDate.getMonth())] + ' ' +  newsDate.getFullYear()
  },
  newsShortDate: date => {
    let newsDate = new Date(date)
    let month = ['Jan','Feb','Mar','Apr','Mei','Jun','Jul','Agt','Sep','Okt','Nov','Des']
    return newsDate.getDate() + ' ' + month[(newsDate.getMonth())] + ' ' +  String(newsDate.getFullYear()).slice(2,4)
  },
}
