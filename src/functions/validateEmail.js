export default () => {
  const email = document.querySelector('#email');
  const error = document.querySelector('.email-error');

  if (!email.validity.valid) {
    if (email.validity.valueMissing)
      error.innerHTML = 'You need to enter an e-mail address.';
    else if (email.validity.typeMismatch)
      error.innerHTML = 'Entered value needs to be an e-mail address.';
    else if (email.validity.tooShort)
      error.innerHTML = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
  } else error.innerHTML = '';
};
