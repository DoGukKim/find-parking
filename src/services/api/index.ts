import { Parking } from 'src/domain/parking/type'
import axiosInstance from './AxiosInterceptor'
import { ErrorType, GetParkingPayload } from './type'

const getParking = async (payload?: Partial<GetParkingPayload>) => {
  const response = await axiosInstance.get<Parking[], Parking[], ErrorType>(
    '',
    {
      params: payload,
    }
  )

  return response
}

const api = {
  getParking,
}

export default api
