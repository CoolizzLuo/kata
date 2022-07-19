import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID tJnvBsglcO82jylkti-aYyW5eigb52p2c7lTRRKX-CY',
  },
});
