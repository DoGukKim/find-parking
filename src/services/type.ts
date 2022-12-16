import { AxiosError } from 'axios'

import { CityCounty, Parking } from 'src/domain/parking/type'
import { StringDashString } from 'src/shared/type'
import { API_RESULT_CODE } from './constant'

type ApiResultCode =
  | StringDashString<
      typeof API_RESULT_CODE['ERROR']['type'],
      typeof API_RESULT_CODE['ERROR']['status'][number]
    >
  | StringDashString<
      typeof API_RESULT_CODE['INFO']['type'],
      typeof API_RESULT_CODE['INFO']['status'][number]
    >

type ApiResult = {
  CODE: ApiResultCode
  MESSAGE: string
}

export type ErrorType = AxiosError | Error | ApiResult

export type ParkingRowErrorResponse = {
  RESULT: ApiResult
}

export type ParkingRowResponse = {
  ParkingPlace: [
    {
      head: [
        {
          list_total_count: number
          api_version: string
        } & ParkingRowErrorResponse
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
  }
}
