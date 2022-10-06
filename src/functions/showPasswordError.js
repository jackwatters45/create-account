export default function showPasswordError() {
  const password = document.querySelector('#password');
  const passwordError = document.querySelector('.password-error');

  if (password.validity.patternMismatch) {
    // If the field doesn't match the pattern,
    // display the following error message.
    passwordError.innerHTML = 'Password must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters.';
  }
}
