import ValidationResult from '../../interfaces/ValidationResult';

const phoneNumberRegex = '^(\\(\\d{1,2}\\))[ 9]?\\d{5}-?\\d{4}$';

const phoneNumber = (key: String, value: String): ValidationResult => {
  const isValid = !!value.match(phoneNumberRegex);

  return {
    key,
    validation: 'phoneNumber',
    isValid,
  };
};

export default phoneNumber;
