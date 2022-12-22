import { Payload } from '../type'

const parking = {
  all: ['parking'] as const,
  lists: () => [...parking.all, 'list'] as const,
  list: (filters?: Partial<Payload['getParking']>) =>
    [...parking.lists(), filters] as const,
}

export const queryKey = {
  parking,
}
