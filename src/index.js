import './styles/style.css';

const email = document.querySelector('#email');

email.addEventListener('input', () => {
  email.setCustomValidity(''); // resets validity text
  email.checkValidity(); // returns false while invalid
});

email.addEventListener('invalid', () => {
  if (email.value === '') {
    // if nothing entered
    email.setCustomValidity('Enter your username!');
  } else {
    // any other invalid value
    email.setCustomValidity(
      'Usernames can only contain upper and lowercase letters. Try again!'
    );
  }
});
