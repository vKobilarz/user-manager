import ValidationResult from '../../interfaces/ValidationResult';

const required = (key: String, value: String): ValidationResult => {
  const isValid = !!value;

  return {
    key,
    validation: 'required',
    isValid,
  };
};

export default required;
