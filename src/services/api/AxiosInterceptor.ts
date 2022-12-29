import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: `https://openapi.gg.go.kr/ParkingPlace`,
  responseType: 'json',
  params: {
    KEY: process.env.NEXT_PUBLIC_PARKING_PLACE_KEY,
    type: 'json',
  },
})

axiosInstance.interceptors.request.use(
  async (config) => {
    if (config.headers) config.headers['Content-Type'] = 'application/json'

    return config
  },
  async (error) => {
    return Promise.reject(error)
  }
)

axiosInstance.interceptors.response.use(
  async (response) => {
    return response
  },
  async (error) => {
    return Promise.reject(error)
  }
)

export default axiosInstance
