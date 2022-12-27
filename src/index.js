import './styles/style.css';
import validateEmail from './functions/validateEmail';
import validateCountry from './functions/validateCountry';
import validateZip from './functions/validateZip';
import validatePassword from './functions/validatePassword';
import validateConfirmPassword from './functions/validateConfirmPassword';

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
  validateEmail();
  validateCountry();
  validateZip();
  validatePassword();
  validateConfirmPassword();

  // prevent the form from being sent by canceling the event
  event.preventDefault();
});
