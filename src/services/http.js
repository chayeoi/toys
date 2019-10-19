import axios from 'axios';

const http = axios.create({
  headers: { Accept: 'application/vnd.github.v3+json' },
  baseURL: '',
});

export default http;
