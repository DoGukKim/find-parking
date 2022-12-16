import { AxiosError } from 'axios'

import { CityCounty } from 'src/domain/parking/type'
import { StringDashString } from 'src/shared/type'
import { API_RESULT_CODE } from './constant'

export type GetParkingPayload = {
  /**
   * @field 페이지 위치
   */
  pIndex: number
  /**
   * @field 페이지 당 요청 숫자
   */
  pSize: number
  SIGUN_NM: CityCounty
}

type ApiErrorCode = StringDashString<
  typeof API_RESULT_CODE['ERROR']['type'],
  typeof API_RESULT_CODE['ERROR']['status'][number]
>

type ApiError = {
  CODE: ApiErrorCode
  MESSAGE: string
}

export type ErrorType = AxiosError | Error | ApiError
