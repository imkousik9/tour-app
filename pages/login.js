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

  const logIn = async (e) => {
    e.preventDefault();
    try {
      await auth.signIn(form.formData?.email, form.formData?.password);
    } catch (error) {
      setMessage(error.response.data?.message);
    }
  };

  return <Auth type="Log In" onSubmit={logIn} form={form} message={message} />;
}

export default Login;
