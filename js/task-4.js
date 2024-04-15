const form = document.querySelector('.login-form');

form.addEventListener('submit', event => {
  event.preventDefault();
  const currentForm = event.target;
  const email = currentForm.elements.email.value.trim();
  const password = currentForm.elements.password.value.trim();

  const user = {};

  if (email == '' || password == '') {
    return alert('All form fields must be filled in');
  }

  user.email = email;
  user.password = password;

  currentForm.reset();

  console.log(user);
});
