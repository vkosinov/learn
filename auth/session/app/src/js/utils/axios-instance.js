import axios from 'axios'

const BASE_URL = 'https://localhost:5000/api'

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
})

axiosInstance.interceptors.request.use(function (config) {
  const token = sessionStorage.getItem('csrf-token')
  config.headers['X-CSRF-TOKEN'] = token
  return config
})
