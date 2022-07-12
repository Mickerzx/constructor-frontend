import axios from 'axios';

export const scsBackendServer = axios.create({
  baseURL: process.env.SCS_BACKEND_SERVER_URL,
});
