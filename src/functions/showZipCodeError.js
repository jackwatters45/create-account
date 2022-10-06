export default function showZipCodeError() {
  const zipCode = document.querySelector('#zip-code');
  const zipCodeError = document.querySelector('.zip-code-error');

  if (zipCode.validity.patternMismatch) {
    // If the field doesn't contain a valid country,
    // display the following error message.
    zipCodeError.innerHTML = 'Zip code must contain 5 numbers.';
  }
}
