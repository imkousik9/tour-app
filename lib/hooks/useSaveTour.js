import React from 'react';
import axios from '../../utils/axios';

export default function useSaveTour() {
  const [state, setState] = React.useReducer((_, action) => action, {
    isIdle: true
  });

  const mutate = React.useCallback(async (id, form) => {
    setState({ isLoading: true });
    try {
      const data = await axios
        .patch(`/api/tours/${id}`, form)
        .then((res) => res.data);
      setState({ isSuccess: true, data });
    } catch (error) {
      setState({ isError: true, error });
    }
  }, []);

  return [mutate, state];
}
