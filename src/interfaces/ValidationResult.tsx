interface ValidationResult {
  isValid: boolean;
  validation: String;
  key: String;
  message?: String;
}

export default ValidationResult;
