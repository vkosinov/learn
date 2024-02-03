import axios from 'axios'

const BASE_URL = 'https://localhost:5000/api'

const token = localStorage.getItem('token')

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${token}`,
  },
})
