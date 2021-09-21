import React from 'react';
import axios from '../../utils/axios';

export default function useDeleteTour() {
  const [state, setState] = React.useReducer((_, action) => action, {
    isIdle: true
  });

  const mutate = React.useCallback(async (tourId) => {
    setState({ isLoading: true });
    try {
      await axios.delete(`/api/tours/${tourId}`).then((res) => res.data);
      setState({ isSuccess: true });
    } catch (error) {
      setState({ isError: true, error });
    }
  }, []);

  return [mutate, state];
}
