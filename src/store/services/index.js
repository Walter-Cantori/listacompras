import axios from 'axios';

export const services = {
  getImages: (product) => {
    const params = {
      key: 'AIzaSyAZb_KMRQZRfDmBm3K_g9-ZlVdKeqadICk',
      cx: '012077189999167618702:7yj3miltn4m',
      searchType: 'image',
      lr: 'lang_pt',
      num: 1,
      q: product,
    }
    return axios.get('https://www.googleapis.com/customsearch/v1', { params })
      .then(resp => resp.data.items[0].link)
      .catch(err=> err);
  }
}