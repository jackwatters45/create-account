export default () => {
  const zipCode = document.querySelector('#zip-code');
  const zipCodeError = document.querySelector('.zip-code-error');

  if (zipCode.validity.patternMismatch)
    zipCodeError.innerHTML = 'Zip code must contain 5 numbers.';
  else zipCodeError.innerHTML = '';
};
