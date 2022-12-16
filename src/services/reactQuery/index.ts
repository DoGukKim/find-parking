import {
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from '@tanstack/react-query'

import { Parking } from 'src/domain/parking/type'
import api from '../api'
import { ErrorType, Payload } from '../type'
import { queryKey } from './queryKey'

export const useParking = (
  params?: Partial<Payload['getParking']>,
  options?: Omit<UseQueryOptions<Parking[], ErrorType>, 'queryKey' | 'queryFn'>
): UseQueryResult<Parking[], ErrorType> => {
  return useQuery(
    queryKey.parking.list(params),
    () => api.getParking(params),
    options
  )
}
