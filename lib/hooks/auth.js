import { useReducer, useEffect, useContext, createContext } from 'react';
import { useRouter } from 'next/router';
import axios from '../../utils/axios';

const authContext = createContext();

export function AuthProvider({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
  return useContext(authContext);
};

function useProvideAuth() {
  const [state, setState] = useReducer((_, action) => action, {
    isIdle: true
  });

  const router = useRouter();

  const signIn = async (email, password) => {
    setState({ isLoading: true });
    try {
      const user = await axios
        .post('/api/users/login', { email, password })
        .then((res) => res.data);
      setState({ isSuccess: true, user });

      if (typeof router.query.next === 'string') {
        router.push(router.query.next);
      } else {
        router.push('/');
      }
    } catch (err) {
      setState({ isError: true, error: err.response.data });
    }
  };

  const signUp = async (name, email, password) => {
    setState({ isLoading: true });
    try {
      const user = await axios
        .post('/api/users/signup', { name, email, password })
        .then((res) => res.data);
      setState({ isSuccess: true, user });
      if (typeof router.query.next === 'string') {
        router.push(router.query.next);
      } else {
        router.push('/');
      }

      if (typeof router.query.next === 'string') {
        router.push(router.query.next);
      } else {
        router.push('/');
      }
    } catch (err) {
      setState({ isError: true, error: err.response.data });
    }
  };

  const signOut = async () => {
    router.push('/');

    return axios.get('/api/users/logout').then(() => {
      setState({ isIdle: true });
    });
  };

  const fetch = async () => {
    setState({ isLoading: true });
    try {
      const user = await axios.get('/api/users/me').then((res) => res.data);
      setState({ isSuccess: true, user });
    } catch (err) {
      setState({ isError: true, error: err.response.data });
    }
  };

  useEffect(() => {
    fetch();
  }, []);

  return {
    ...state,
    signIn,
    signUp,
    signOut
  };
}
