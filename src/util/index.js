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
  fullDate: date => {
    let fullDate = new Date(date)
    let day = ['Minggu','Senin','Selasa','Rabu','Kamis','Jumat','Sabtu']
    let month = ['Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember']
    return day[fullDate.getDay()] + ', ' + fullDate.getDate() + ' ' + month[(fullDate.getMonth())] + ' ' +  fullDate.getFullYear() + ' ' +  fullDate.getHours() + ':' + fullDate.getMinutes()
  },
  newsShortDate: date => {
    let newsDate = new Date(date)
    let month = ['Jan','Feb','Mar','Apr','Mei','Jun','Jul','Agt','Sep','Okt','Nov','Des']
    return newsDate.getDate() + ' ' + month[(newsDate.getMonth())] + ' ' +  String(newsDate.getFullYear()).slice(2,4)
  },
  uploadImageCallBack: file => {
    return new Promise(
    (resolve, reject) => {
      const xhr = new XMLHttpRequest(); // eslint-disable-line no-undef
      xhr.open('POST', 'https://api.imgur.com/3/image');
      xhr.setRequestHeader('Authorization', 'Client-ID 8d26ccd12712fca');
      const data = new FormData(); // eslint-disable-line no-undef
      data.append('image', file);
      xhr.send(data);
      xhr.addEventListener('load', () => {
        const response = JSON.parse(xhr.responseText);
        resolve(response);
      });
      xhr.addEventListener('error', () => {
        const error = JSON.parse(xhr.responseText);
        reject(error);
      });
    }
  );
  }
}
