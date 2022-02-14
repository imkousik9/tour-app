import React from 'react';
import { poster } from '../fetcher';

export default function useCreateTour() {
  const [state, setState] = React.useReducer((_, action) => action, {
    isIdle: true
  });

  const mutate = React.useCallback(async (values) => {
    setState({ isLoading: true });
    try {
      const [, data] = await poster('/api/tours', values);
      setState({ isSuccess: true, data });
    } catch (err) {
      setState({ isError: true, error: err.response.data });
    }
  }, []);

  return [mutate, state];
}
