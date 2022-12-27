export default () => {
  const password = document.querySelector('#password');
  const passwordError = document.querySelector('.password-error');

  if (password.validity.patternMismatch)
    passwordError.innerHTML =
      'Password must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters.';
  else passwordError.innerHTML = '';
};
