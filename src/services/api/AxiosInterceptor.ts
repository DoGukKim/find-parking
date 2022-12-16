import axios from 'axios'

import { API_RESULT_CODE, ERROR_MESSAGE } from './constant'

const axiosInstance = axios.create({
  baseURL: `https://openapi.gg.go.kr/ParkingPlace`,
  responseType: 'json',
  timeout: 1000,
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
    if (!response.data.ParkingPlace) {
      return response.data.ParkingPlace?.[1]?.row
    } else if (
      response.data.RESULT?.CODE?.includes(API_RESULT_CODE.ERROR.type)
    ) {
      throw response.data.RESULT
    } else {
      throw new Error(ERROR_MESSAGE.server)
    }
  },
  async (error) => {
    return Promise.reject(error)
  }
)

export default axiosInstance
