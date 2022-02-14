import Router from 'next/router';
import { useAuth } from './hooks';

export const authRouteUser = (WrappedComponent) => {
  return (props) => {
    if (typeof window !== 'undefined') {
      const { user } = useAuth();

      if (!user) {
        Router.replace('/');
        return null;
      }

      return <WrappedComponent {...props} />;
    }

    return null;
  };
};

export const authRouteAdmin = (WrappedComponent) => {
  return (props) => {
    if (typeof window !== 'undefined') {
      const { user } = useAuth();

      if (!user || !user?.role === 'admin') {
        Router.replace('/');
        return null;
      }

      return <WrappedComponent {...props} />;
    }

    return null;
  };
};
