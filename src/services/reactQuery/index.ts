import {
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from '@tanstack/react-query'

import { Parking } from 'src/domain/parking/type'
import api from '../api'
import { ErrorType, GetParkingPayload } from '../api/type'
import { queryKey } from './queryKey'

export const useParking = (
  params?: Partial<GetParkingPayload>,
  options?: Omit<UseQueryOptions<Parking[], ErrorType>, 'queryKey' | 'queryFn'>
): UseQueryResult<Parking[], ErrorType> => {
  return useQuery(
    queryKey.parking.list(params),
    () => api.getParking(params),
    options
  )
}
