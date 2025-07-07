import { useState } from 'react';

const usePasswordValidation = () => {
  const [passwordValidation, setPasswordValidation] = useState({
    length: false,
    upperCase: false,
    lowerCase: false,
    digit: false,
    specialCase: false,
  });

  const validatePassword = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+=?]).{8,15}$/;

    if (!regex.test(password)) {
      let temp = { ...passwordValidation };
      if (password.length < 8 || password.length > 15) {
        temp = {
          ...temp,
          length: false,
        };
      } else {
        temp = {
          ...temp,
          length: true,
        };
      }

      if (!/(?=.*[a-z])/.test(password)) {
        temp = {
          ...temp,
          lowerCase: false,
        };
      } else {
        temp = {
          ...temp,
          lowerCase: true,
        };
      }

      if (!/(?=.*[A-Z])/.test(password)) {
        temp = {
          ...temp,
          upperCase: false,
        };
      } else {
        temp = {
          ...temp,
          upperCase: true,
        };
      }

      if (!/(?=.*\d)/.test(password)) {
        temp = {
          ...temp,
          digit: false,
        };
      } else {
        temp = {
          ...temp,
          digit: true,
        };
      }

      if (!/(?=.*[!@#$%^&*()_\-+=?])/.test(password)) {
        temp = {
          ...temp,
          specialCase: false,
        };
      } else {
        temp = {
          ...temp,
          specialCase: true,
        };
      }

      setPasswordValidation({
        ...passwordValidation,
        ...temp,
      });
    } else {
      setPasswordValidation({
        ...passwordValidation,
        length: true,
        upperCase: true,
        lowerCase: true,
        digit: true,
        specialCase: true,
      });
    }
  };

  return { passwordValidation, validatePassword };
};

export default usePasswordValidation;
