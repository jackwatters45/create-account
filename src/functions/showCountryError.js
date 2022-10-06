export default function showCountryError() {
  const country = document.querySelector('#country');
  const countryError = document.querySelector('.country-error');

  if (country.validity.patternMismatch) {
    // If the field doesn't contain a valid country,
    // display the following error message.
    countryError.innerHTML = 'Entered value cannot include special charecters.';
  }
}
