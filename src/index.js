import './styles/style.css';
import showEmailError from './functions/showEmailError';
import showCountryError from './functions/showCountryError';
import showZipCodeError from './functions/showZipCodeError';
import showPasswordError from './functions/showPasswordError';

const form = document.querySelector('.form');
const email = document.querySelector('#email');
const country = document.querySelector('#country');


email.addEventListener('input', () => showEmailError());
country.addEventListener('input', () => showCountryError());

const zipCode = document.querySelector('#zip-code');
const zipCodeError = document.querySelector('.zip-code-error');

zipCode.addEventListener('input', () => {
  if (zipCode.validity.valid) {
    zipCodeError.innerHTML = ''; // resets validity text
  } else {
    showZipCodeError();
  }
});

const password = document.querySelector('#password');
const passwordError = document.querySelector('.password-error');

password.addEventListener('input', () => {
  if (password.validity.valid) {
    passwordError.innerHTML = ''; // resets validity text
  } else {
    showPasswordError();
  }
});

const confirmPassword = document.querySelector('#confirm-password');
const confirmPasswordError = document.querySelector('.confirm-password-error');

confirmPassword.addEventListener('input', () => {
  if (password.value === confirmPassword.value) {
    confirmPasswordError.innerHTML = ''; // resets validity text
  } else {
    confirmPasswordError.innerHTML = 'Does not match password';
  }
});

form.addEventListener('submit', (event) => {
  if (!email.validity.valid) {
    // If email isn't valid, display an appropriate error message
    showEmailError();
  } else if (!country.validity.valid) {
    // If country isn't valid, display an appropriate error message
    showCountryError();
  } else if (!zipCode.validity.valid) {
    // If zip code isn't valid, display an appropriate error message
    showZipCodeError();
  } else if (!password.validity.valid) {
    // TODO this part
    // if password section isn't valid, display an appropriate error message
    showPasswordError();
  } else if (!(password.value === confirmPassword.value)) {
    confirmPasswordError.innerHTML = 'Does not match password';
  }
  // Then we prevent the form from being sent by canceling the event
  event.preventDefault();
});
