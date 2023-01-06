import { AxiosResponse } from 'axios'

import axiosInstance from './AxiosInterceptor'
import { ParkingRowResultResponse, ParkingRowResponse, Payload } from '../type'
import { API_RESULT_CODE, ERROR_MESSAGE } from '../constant'

const isSpecialCaseReponse = (
  response: ParkingRowResponse | ParkingRowResultResponse
): response is ParkingRowResultResponse => {
  return (response as ParkingRowResultResponse).RESULT !== undefined
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
  } else if (isSpecialCaseReponse(response.data)) {
    if (response.data.RESULT.CODE?.includes(API_RESULT_CODE.ERROR.type)) {
      throw response.data.RESULT
    } else {
      throw new Error(ERROR_MESSAGE.noResult)
    }
  } else {
    throw new Error(ERROR_MESSAGE.server)
  }
}

const api = {
  getParking,
}

export default api
