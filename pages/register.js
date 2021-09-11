import React from 'react';
import { useAuth, useForm } from '../lib/hooks';
import Auth from '../components/Auth';

const obj = {
  name: '',
  email: '',
  password: ''
};

function Register() {
  const [message, setMessage] = React.useState('');

  const form = useForm(obj);
  const auth = useAuth();

  const signUp = async (e) => {
    e.preventDefault();
    try {
      await auth.signUp(
        form.formData?.name,
        form.formData?.email,
        form.formData?.password
      );
    } catch (error) {
      setMessage(error.response.data?.message);
    }
  };

  return (
    <Auth type="Sign Up" onSubmit={signUp} form={form} message={message} />
  );
}
export default Register;
