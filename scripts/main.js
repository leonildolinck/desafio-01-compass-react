let email = document.getElementById('email')
let password = document.getElementById('password')
let form = document.querySelector('form')
let textForm = document.getElementById('textForm')
let textEmail = document.getElementById('textEmail')
let textPassword = document.getElementById('textPassword')

form.addEventListener('submit', (e) => {

  if (email.value == '' && password.value == '') {
    textForm.textContent = 'You must fill all the fields!'
  } else if (
    validatorEmail(email.value) === true &&
    validatorPassword(password.value) === true
  ) {
    console.log(email.value)
    console.log(password.value)
    window.location.href = 'kanban.html'

  } else {
    console.log('invalido')
  }

  e.preventDefault()

});

email.addEventListener('keyup', () => {
  if (validatorEmail(email.value) !== true) {
    textEmail.textContent = 'The address must be : example@example.com'
  } else {
    textEmail.textContent = ''
  }
});

password.addEventListener('keyup', () => {
  if (validatorPassword(password.value) !== true) {
    textPassword.textContent =
      "Password must be at least 8 characters";
  } else {
    textPassword.textContent = ''
  }
})

function validatorEmail(email) {
  let emailInput = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/
  return emailInput.test(email)
}

function validatorPassword(password) {
  let passwordPattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*]{8,16}$/
  return passwordPattern.test(password)
}