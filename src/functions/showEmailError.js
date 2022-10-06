export default function showEmailError() {
  const email = document.querySelector('#email');
  const emailError = document.querySelector('.email-error');

  if (email.validity.valueMissing) {
    // If the field is empty,
    // display the following error message.
    emailError.innerHTML = 'You need to enter an e-mail address.';
  } else if (email.validity.typeMismatch) {
    // If the field doesn't contain an email address,
    // display the following error message.
    emailError.innerHTML = 'Entered value needs to be an e-mail address.';
  } else if (email.validity.tooShort) {
    // If the data is too short,
    // display the following error message.
    emailError.innerHTML = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
  }
}
