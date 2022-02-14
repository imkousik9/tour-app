import React from 'react';
import { deleter } from '../fetcher';

export default function useDeleteTour() {
  const [state, setState] = React.useReducer((_, action) => action, {
    isIdle: true
  });

  const mutate = React.useCallback(async (tourId) => {
    setState({ isLoading: true });
    try {
      await deleter(`/api/tours/${tourId}`);
      setState({ isSuccess: true });
    } catch (error) {
      setState({ isError: true, error });
    }
  }, []);

  return [mutate, state];
}
