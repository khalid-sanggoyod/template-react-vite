import axios from 'axios';
import { useStorage } from './storage';
import { API_URL_TEMP } from '../api/api';

const token = useStorage.getItem('authToken');

axios.defaults.baseURL = `${API_URL_TEMP}`;
axios.defaults.headers.get['Accept'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';
axios.defaults.headers.patch['Accept'] = 'application/json';
axios.defaults.headers.delete['Accept'] = 'application/json';

export const setAuthorizationHeader = (data: any) => {
  const authToken = `${data.token}`;

  useStorage.setItem('authToken', authToken);
  useStorage.setItem('user', JSON.stringify(data.data));
  axios.defaults.headers.common['Authorization'] = authToken;
};

export default axios.create({
  baseURL: `${API_URL_TEMP}`,
  responseType: `json`,
  headers: {
    Authorization: token ? `Bearer ${token}` : '',
  },
});
