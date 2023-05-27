const namePattern = /^[a-zA-Z ]{1,15}$/;
const emailPattern = /^[^ ]+@[^ ]+.[a-z]{2,3}$/;
const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
let nameError = false;
let emailError = false;
let passwordError = false;

document.querySelector('form').addEventListener('submit', (event) => {
  event.preventDefault();

  if (!namePattern.test(document.querySelector('#name').value)) {
    nameError = true;
    document.querySelector('#nameError').textContent = 'Must be a maximum of 15 characters and contain only English letters';
    document.querySelector('#name').style.borderColor = 'red';
    document.querySelector('#nameError').style.color = 'red'
  } else {
    document.querySelector('#nameError').textContent = '';
    document.querySelector('#name').style.borderColor = '';
  }

  if (!emailPattern.test(document.querySelector('#email').value)) {
    emailError = true;
    document.querySelector('#emailError').textContent = 'Email is invalid';
    document.querySelector('#email').style.borderColor = 'red';
    document.querySelector('#emailError').style.color = 'red'
  } else {
    document.querySelector('#emailError').textContent = '';
    document.querySelector('#email').style.borderColor = '';
  }

  if (!passwordPattern.test(document.querySelector('#password').value)) {
    passwordError = true;
    document.querySelector('#passwordError').textContent = 'Must be at least 8 characters and contain lowercase, uppercase and numbers';
    document.querySelector('#password').style.borderColor = 'red';
    document.querySelector('#passwordError').style.color = 'red'
 
  } else {
    document.querySelector('#passwordError').textContent = '';
    document.querySelector('#password').style.borderColor = '';
  }

  if (!nameError && !emailError && !passwordError) {
    document.querySelector('form').submit();
  }
});
