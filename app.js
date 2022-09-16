const { toggle } = require('cli-spinners');

function dropFunction() {
  document.getElementById('drop-content').classList.toggle('show');
}
dropFunction();
toggle.addEventListener('click', () => {
  toggle.classList.dropFunction();
});

const contactForm = document.querySelector('.contact-me');
const email = document.querySelector('#input-email');
const submitForm = document.querySelector('#form-submit');
const textArea = document.querySelector('#text-area-input');
const fullName = document.querySelector('#full-name-input')
const regEx = /^[a-z0-9]+@[a-z0-9-]+\.[a-z0-9-.]+$/;

submitForm.addEventListener ('click', (bad) => {
  let emailAddress = email.value;
  const displayError = document.querySelector('.display-error');

  if (!regEx.test(emailAddress)){

    bad.preventDefault();

    displayError.style.display = 'block';
  } else if (regEx.test(emailAddress)){
    displayError.style.display = 'none';
  }
});