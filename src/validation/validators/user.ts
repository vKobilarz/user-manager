import ValidationResult from '../../interfaces/ValidationResult';

const user = (key: String, value: String): ValidationResult => {
  const isValid = value.includes(' ');

  return {
    key,
    validation: 'user',
    isValid,
  };
};

export default user;
