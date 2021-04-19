import axios from 'axios'

const axiosApi = axios.create({
  baseURL: process.env.VUE_APP_ROOT_API,
});

axiosApi.interceptors.request.use(function (config) {
  let token = localStorage.getItem('ACCESS_TOKEN');

  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
}, function (error) {
  return Promise.reject(error);
});


axiosApi.interceptors.response.use(function (response) {
  let token = localStorage.getItem('ACCESS_TOKEN');

  if (token) {
    response.headers['Authorization'] = `Bearer ${token}`;
  }
  return response;
}, function (error) {
  return Promise.reject(error);
});

export default axiosApi;
