import { AxiosError } from 'axios'

import { CityCounty, Parking, ParkingDivision } from 'src/domain/parking/type'
import { StringDashString } from 'src/shared/type'
import { API_RESULT_CODE } from './constant'

type ApiResultCodeType = keyof typeof API_RESULT_CODE

type ApiErrorCode = StringDashString<
  Extract<ApiResultCodeType, 'ERROR'>,
  typeof API_RESULT_CODE['ERROR']['status'][number]
>

type ApiInfoCode = StringDashString<
  Extract<ApiResultCodeType, 'INFO'>,
  typeof API_RESULT_CODE['INFO']['status'][number]
>
type ApiResult<T = ApiErrorCode | ApiInfoCode> = {
  CODE: T
  MESSAGE: string
}

export type ErrorType = AxiosError | Error | ApiResult<ApiErrorCode>

export type ParkingRowResultResponse = {
  RESULT: ApiResult
}

export type ParkingRowResponse = {
  ParkingPlace: [
    {
      head: [
        {
          list_total_count: number
          api_version: string
        } & ParkingRowResultResponse
      ]
    },
    { row: Parking[] }
  ]
}

export type Payload = {
  getParking: {
    /**
     * @field 페이지 위치
     */
    pIndex: number
    /**
     * @field 페이지 당 요청 숫자
     */
    pSize: number
    SIGUN_NM: CityCounty
    PARKPLC_DIV_NM: ParkingDivision
  }
}
