export default () => {
  const password = document.querySelector('#password');
  const confirmPassword = document.querySelector('#confirm-password');
  const confirmPasswordError = document.querySelector(
    '.confirm-password-error'
  );

  if (password.value === confirmPassword.value)
    confirmPasswordError.innerHTML = '';
  else confirmPasswordError.innerHTML = 'Does not match password';
};
