import React from 'react';
import axios from '../../utils/axios';

export default function useTours() {
  const [state, setState] = React.useReducer((_, action) => action, {
    isLoading: true
  });

  const fetch = async () => {
    setState({ isLoading: true });
    try {
      const tours = await axios.get('/api/tours').then((res) => res.data);
      setState({ isSuccess: true, data: tours });
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
