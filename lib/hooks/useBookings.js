import React from 'react';
import { fetcher } from '../fetcher';

export default function useBookings() {
  const [state, setState] = React.useReducer((_, action) => action, {
    isLoading: true
  });

  const fetch = async () => {
    setState({ isLoading: true });
    try {
      const [, data] = await fetcher('/api/bookings');
      setState({ isSuccess: true, data });
    } catch (err) {
      setState({ isError: true, error: err.response.data });
    }
  };

  React.useEffect(() => {
    fetch();
  }, []);

  return {
    ...state
  };
}
