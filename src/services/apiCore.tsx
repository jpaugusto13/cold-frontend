import axios from 'axios';

const apiCore = axios.create({
  baseURL: 'https://cold-backend.vercel.app/',
});

export default apiCore;
