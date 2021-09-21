import React from 'react';
import axios from '../../utils/axios';

export default function useCreateTour() {
  const [state, setState] = React.useReducer((_, action) => action, {
    isIdle: true
  });

  const mutate = React.useCallback(async (values) => {
    setState({ isLoading: true });

    axios
      .post('/api/tours', values)
      .then((res) => setState({ isSuccess: true, data: res.data }))
      .catch((error) => setState({ isError: true, error }));
  }, []);

  return [mutate, state];
}
