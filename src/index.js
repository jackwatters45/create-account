import './styles/style.css';
import validateEmail from './functions/validateEmail';
import validateCountry from './functions/validateCountry';
import validateZip from './functions/validateZip';
import validatePassword from './functions/validatePassword';
import validateConfirmPassword from './functions/validateConfirmPassword'

const form = document.querySelector('.form');
const email = document.querySelector('#email');
const country = document.querySelector('#country');
const zipCode = document.querySelector('#zip-code');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm-password');

email.addEventListener('input', () => validateEmail());
country.addEventListener('input', () => validateCountry());
zipCode.addEventListener('input', () => validateZip());
password.addEventListener('input', () => validatePassword());
confirmPassword.addEventListener('input', () => validateConfirmPassword());

form.addEventListener('submit', (event) => {
  if (!email.validity.valid) {
    // If email isn't valid, display an appropriate error message
    validateEmail();
  } else if (!country.validity.valid) {
    // If country isn't valid, display an appropriate error message
    validateCountry();
  } else if (!zipCode.validity.valid) {
    // If zip code isn't valid, display an appropriate error message
    validateZip();
  } else if (!password.validity.valid) {
    // TODO this part
    // if password section isn't valid, display an appropriate error message
    validatePassword();
  } else if (!(password.value === confirmPassword.value)) {
    validateConfirmPassword()
  }
  // Then we prevent the form from being sent by canceling the event
  event.preventDefault();
});
