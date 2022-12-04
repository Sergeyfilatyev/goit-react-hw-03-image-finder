import axios from 'axios';
const API_KEY = '29648653-4a0943b69a497c54fdb933d14';
const API_URL = 'https://pixabay.com/api/';

function fetchImage(name, page) {
  return axios(
    `${API_URL}?key=${API_KEY}&q=${name}&image_type=photo&orientation=horizontal&page=${page}&per_page=12`
  ).then(r => r.data.hits);
}
// fetchImage('car', 5)
//   .then(hits =>
//     hits.map(({ id, webformatURL, largeImageURL }) => ({
//       id,
//       largeImageURL,
//       webformatURL,
//     }))
//   )
//   .then(console.log);
export default fetchImage;
