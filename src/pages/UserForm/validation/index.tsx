import User from '../../../interfaces/User';
import ValidationResult from '../../../interfaces/ValidationResult';
import { required, email, url, phoneNumber, user } from '../../../validation/validators';

interface KeyValidation {
  key: string;
  failedValidations: String[];
  isValid: boolean;
}

const validate = (user: Omit<User, 'id'>) => {
  const keys = Object.keys(user);

  const keyValidations = getKeyValidations(keys, user);
  // @ts-ignore
  const isValid = keyValidations.every((value) => value.isValid);

  return { validations: validationToObject(keyValidations), isValid };
};

const getFailedValidations = (
  validationResults: ValidationResult[],
): String[] => {
  return validationResults
    .filter((validationResult) => !validationResult.isValid)
    .map((validationResult) => validationResult.validation);
};

const validationToObject = (validation: KeyValidation[]) =>
  validation.reduce((previous, current) => {
    const { key, ...value } = current;

    return {
      ...previous,
      [key]: value,
    };
  }, {});

const getKeyValidations = (keys: string[], user: Omit<User, 'id'>) => {
  const keyValidations = keys.map((key) => {
    // @ts-ignore
    const value: String = user[key];
    // @ts-ignore
    const keyValidators = userValidators[key];
    const validationResults: ValidationResult[] = keyValidators?.map(
      // @ts-ignore
      (validator) => validator(key, value)
    ) || [];

    return {
      key,
      failedValidations: getFailedValidations(validationResults),
      isValid: validationResults.every((value) => value.isValid),
    };
  });

  return keyValidations;
};

const userValidators = {
  name: [required, user],
  email: [required, email],
  imageUrl: [required, url],
  phoneNumber: [required, phoneNumber],
};

export default validate;
