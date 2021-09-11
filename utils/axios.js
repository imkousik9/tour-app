import axios from 'axios';
let instance;
if (!instance) {
  instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_URL,
    withCredentials: true,
    credentials: 'include'
  });
}
export default instance;
