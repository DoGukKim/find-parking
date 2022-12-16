import { AxiosResponse } from 'axios'

import axiosInstance from './AxiosInterceptor'
import { ParkingRowErrorResponse, ParkingRowResponse, Payload } from '../type'
import { API_RESULT_CODE, ERROR_MESSAGE } from '../constant'

const isErrorReponse = (
  response: ParkingRowResponse | ParkingRowErrorResponse
): response is ParkingRowErrorResponse => {
  return (response as ParkingRowErrorResponse).RESULT !== undefined
}

const getParking = async (payload?: Partial<Payload['getParking']>) => {
  const response = await axiosInstance.get<
    ParkingRowResponse,
    AxiosResponse<ParkingRowResponse>
  >('', {
    params: payload,
  })

  if (response.data.ParkingPlace) {
    return response.data.ParkingPlace?.[1]?.row
  } else if (
    isErrorReponse(response.data) &&
    response.data.RESULT.CODE?.includes(API_RESULT_CODE.ERROR.type)
  ) {
    throw response.data.RESULT
  } else {
    throw new Error(ERROR_MESSAGE.server)
  }
}

const api = {
  getParking,
}

export default api
