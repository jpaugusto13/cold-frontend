import axios from 'axios';

const api = axios.create({
  baseURL: 'https://cold-backend.vercel.app',
});
export default api;
