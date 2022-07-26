import axios from 'axios';

const KEY = 'AIzaSyAR68-N2LT95TEkvElxaBckROcJS9z5LzE';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY,
  },
});
