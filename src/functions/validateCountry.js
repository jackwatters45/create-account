export default () => {
  const country = document.querySelector('#country');
  const countryError = document.querySelector('.country-error');

  if (country.validity.patternMismatch)
    countryError.innerHTML = 'Entered value cannot include special charecters.';
  else countryError.innerHTML = '';
};
