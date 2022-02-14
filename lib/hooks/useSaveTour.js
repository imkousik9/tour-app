import React from 'react';
import { updater } from '../fetcher';

export default function useSaveTour() {
  const [state, setState] = React.useReducer((_, action) => action, {
    isIdle: true
  });

  const mutate = React.useCallback(async (id, form) => {
    setState({ isLoading: true });
    try {
      const [, data] = await updater(`/api/tours/${id}`, form);

      setState({ isSuccess: true, data });
    } catch (error) {
      setState({ isError: true, error });
    }
  }, []);

  return [mutate, state];
}
