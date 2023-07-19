import axios from 'axios';

const api = axios.create({
  baseURL: 'https://cold-frontend.vercel.app',
});

export default api;
