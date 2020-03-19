import axios from 'axios';
import config from '../config';

const http = axios.create({
  baseURL: config.apiUrl,
  timeout: 10000
});

export function overWriteAxiosConfigurations(baseUrl = '', timeout = 10000) {
  http.defaults.timeout = timeout;
  http.defaults.baseURL = baseUrl;
}

export default http;
