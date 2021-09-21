import React from 'react';
import axios from '../../utils/axios';

export default function useBookings() {
  const [state, setState] = React.useReducer((_, action) => action, {
    isLoading: true
  });

  const fetch = async () => {
    setState({ isLoading: true });
    try {
      const data = await axios.get('/api/bookings').then((res) => res.data);
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
