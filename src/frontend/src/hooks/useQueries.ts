import { useQuery } from '@tanstack/react-query';
import { useActor } from './useActor';
import type { BookingSubmission } from '../backend';

export function useGetAllSubmissions() {
  const { actor, isFetching } = useActor();

  return useQuery<BookingSubmission[]>({
    queryKey: ['demoBookings'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllSubmissions();
    },
    enabled: !!actor && !isFetching,
  });
}
