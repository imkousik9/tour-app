import { useState } from 'react';

export const useForm = (obj) => {
  const [formData, setFormData] = useState(obj);

  const [errors, setErrors] = useState({});

  const nameRegex = /^[a-zA-Z\s]*[^\s]$/gim;
  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  function isValid(value, id, regex, text) {
    if (!value) {
      setErrors({ ...errors, [id]: `Your ${text} is required` });
      return false;
    } else if (!regex.test(value)) {
      setErrors({ ...errors, [id]: `Your ${text} is not valid` });
      return false;
    } else {
      setErrors({ ...errors, [id]: '' });
      return true;
    }
  }

  function validateInput(id, value) {
    switch (id) {
      case 'name':
        return isValid(value, id, nameRegex, 'Name');
      case 'email':
        return isValid(value, id, emailRegex, 'Email');
      case 'password':
        return isValid(value, id, passwordRegex, 'Password');
      default:
        break;
    }
  }

  const handleInput = (e) => {
    const { value, id } = e.target;
    validateInput(id, value);
    setFormData({ ...formData, [id]: value });
  };

  const isFormValid = () => {
    let errorArray = Object.values(errors);
    return (
      errorArray.length === Object.values(obj).length &&
      errorArray.filter(Boolean).length === 0
    );
  };

  return { formData, errors, handleInput, isFormValid: isFormValid() };
};
