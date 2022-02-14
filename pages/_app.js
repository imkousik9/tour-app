import { useEffect, useState } from 'react';
import { fetcher } from '../lib/fetcher';
import { AuthProvider } from '../lib/hooks/auth';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const [state, setState] = useState(null);

  const fetch = async () => {
    try {
      const [, user] = await fetcher('/api/users/me');
      setState(user);
    } catch (err) {
      console.log(err.response.data);
    }
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <AuthProvider initialState={state}>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
