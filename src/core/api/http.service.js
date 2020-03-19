import axios from 'axios';
import config from '../config';
import { log } from '../errors/log.service';
import { toast } from 'react-toastify';

const http = axios.create({
  baseURL: config.apiUrl,
  timeout: 10000
});

export function overWriteAxiosConfigurations(baseUrl = '', timeout = 10000) {
  http.defaults.timeout = timeout;
  http.defaults.baseURL = baseUrl;
}

axios.interceptors.response.use(null, error => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) {
    log(error);
    toast.error('An unexpected error occurred.');
  }

  return Promise.reject(error);
});

export function handleNotFoundError(handleError) {
  http.interceptors.response.use(
    response => response,
    error => {
      if (error.status === 404) {
        handleError(error);
      }
      return Promise.reject(error);
    }
  );
}

export default http;
