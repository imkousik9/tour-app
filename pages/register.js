import React from 'react';
import { useAuth, useForm } from '../lib/hooks';
import Auth from '../components/Auth';

const obj = {
  name: '',
  email: '',
  password: ''
};

function Register() {
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
    } catch (error) {}
  };

  return (
    <Auth
      type="Sign Up"
      onSubmit={signUp}
      form={form}
      message={auth.error?.message}
    />
  );
}
export default Register;
