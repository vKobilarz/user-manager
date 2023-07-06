import ValidationResult from '../../interfaces/ValidationResult';

const url = (key: String, value: String): ValidationResult => {
  const isValid = value.includes('http://') || value.includes('https://');

  return {
    key,
    validation: 'url',
    isValid,
  };
};

export default url;
