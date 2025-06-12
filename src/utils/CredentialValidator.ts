export enum CredentialError {
  usernameCharError = 'Username can only be letters/numbers',
  usernameExistsError = 'Username is not available',
  nonExistentUsernameError = 'Username does not exist',
  passwordCharError = 'Password can only be letters/numbers',
  emptyError = 'Username/password cannot be empty',
  lengthError = 'Username/password cannot be more than 10 characters',
  unauthenticatedError = 'Invalid session. Please login again',
  catchAllError = 'Something went wrong, please try again.',
}

export default function ValidateCredentials(
  username: string,
  password: string
): string {
  var letters = /^[A-Za-z0-9]+$/;
  if (username.length == 0 || password.length == 0) {
    return CredentialError.emptyError;
  } else if (!username.match(letters)) {
    return CredentialError.usernameCharError;
  } else if (!password.match(letters)) {
    return CredentialError.passwordCharError;
  } else if (username.length > 10 || password.length > 10) {
    return CredentialError.lengthError;
  }
  return '';
}
