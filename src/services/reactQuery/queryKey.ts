import { GetParkingPayload } from '../api/type'

const parking = {
  all: ['parking'] as const,
  lists: () => [...parking.all, 'list'] as const,
  list: (filters?: Partial<GetParkingPayload>) =>
    [...parking.lists(), filters] as const,
}

export const queryKey = {
  parking,
}
