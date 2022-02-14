import { useReducer, useContext, createContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from '../../utils/axios';

const authContext = createContext();

export function AuthProvider({ children, initialState }) {
  const auth = useProvideAuth(initialState);
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
  return useContext(authContext);
};

function useProvideAuth(initialState) {
  const [state, setState] = useReducer((_, action) => action, {
    user: null
  });

  useEffect(() => {
    setState({ user: initialState });
  }, [initialState]);

  const router = useRouter();

  const signIn = async (email, password) => {
    try {
      const user = await axios
        .post('/api/users/login', { email, password })
        .then((res) => res.data);
      setState({ user });

      if (typeof router.query.next === 'string') {
        router.push(router.query.next);
      } else {
        router.push('/');
      }
    } catch (err) {
      setState({ error: err.response.data });
    }
  };

  const signUp = async (name, email, password) => {
    try {
      const user = await axios
        .post('/api/users/signup', { name, email, password })
        .then((res) => res.data);
      setState({ user });
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
      setState({ error: err.response.data });
    }
  };

  const signOut = async () => {
    router.push('/');

    return axios.get('/api/users/logout').then(() => {
      setState({ user: null });
    });
  };

  return {
    ...state,
    signIn,
    signUp,
    signOut
  };
}
