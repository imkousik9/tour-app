import React from 'react';
import { useAuth, useForm } from '../lib/hooks';
import Auth from '../components/Auth';

const obj = {
  email: '',
  password: ''
};

function Login() {
  const [message, setMessage] = React.useState('');

  const form = useForm(obj);
  const auth = useAuth();

  const testUserLogin = async (e) => {
    e.preventDefault();

    const email = 'test@mail.com';
    const password = 'test1234';

    try {
      await auth.signIn(email, password);
    } catch (error) {
      setMessage(error.response.data?.message);
    }
  };

  const logIn = async (e) => {
    e.preventDefault();
    try {
      await auth.signIn(form.formData?.email, form.formData?.password);
    } catch (error) {
      setMessage(error.response.data?.message);
    }
  };

  return (
    <Auth
      type="Log In"
      onSubmit={logIn}
      onTestSubmit={testUserLogin}
      form={form}
      message={message}
    />
  );
}

export default Login;
