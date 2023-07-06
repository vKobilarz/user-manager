import ValidationResult from '../../interfaces/ValidationResult';

const email = (key: String, value: String): ValidationResult => {
  const isValid = value.includes('@');

  return {
    key,
    validation: 'email',
    isValid,
  };
};

export default email;
