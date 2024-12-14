let subscribeForm = document.getElementById('subscribeForm')
let subscribeEmail = document.getElementById('subscribeEmail')
let subscribeName = document.getElementById('subscribeName')
let subscribeEmailSmall = document.getElementById('subscribeEmailSmall')
let subscribeNameSmall = document.getElementById('subscribeNameSmall')

let loginForm = document.getElementById('loginForm')
let loginEmail = document.getElementById('loginEmail')
let loginPassword = document.getElementById('loginPassword')
let loginEmailSmall = document.getElementById('loginEmailSmall')
let loginPasswordSmall = document.getElementById('loginPasswordSmall')


if(subscribeForm) {
  subscribeForm.addEventListener('submit', (e) => {
    e.preventDefault()
  
    if (subscribeEmail.value == '' || subscribeName.value == '') {
      subscribeNameSmall.textContent = 'You must fill all the fields!'
    } else if (
      validatorEmail(subscribeEmail.value) === true &&
      validatorName(subscribeName.value) === true
    ) {  
      localStorage.setItem('name', subscribeEmail.value)
      localStorage.setItem('email', subscribeName.value)

    } else {
      console.log('not valid')////////////////////////////// RESPOSTA
    }
  })

}

if(loginForm) {
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault()
  
    if (loginEmail.value == '' || loginPassword.value == '') {
      loginEmailSmall.textContent = 'You must fill all the fields!'
    } else if (
      validatorEmail(loginEmail.value) === true &&
      validatorPassword(loginPassword.value) === true
    ) {
      window.location.href = 'kanban.html'
    } else {
      console.log('not valid')////////////////////////////// RESPOSTA
    }
  })
}


if(subscribeForm) {
  subscribeEmail.addEventListener('keyup', () => {
    if (validatorEmail(subscribeEmail.value) !== true) {
      subscribeEmailSmall.textContent = 'The address must be : example@example.com.'
      subscribeEmailSmall.style.color = 'red'
    } else {
      subscribeEmailSmall.textContent = ''
      subscribeEmailSmall.style.color = ''
    }
  })

  subscribeName.addEventListener('keyup', () => {
    if (validatorName(subscribeName.value) !== true) {
      subscribeNameSmall.textContent = 'Type your name.'
    } else {
      subscribeNameSmall.textContent = ''
    }
  })
}

if(loginForm) {
  loginEmail.addEventListener('keyup', () => {
    if (validatorEmail(loginEmail.value) !== true) {
      loginEmailSmall.textContent = 'The address must be : example@example.com.'
    } else {
      loginEmailSmall.textContent = ''
    }
  })

  loginPassword.addEventListener('keyup', () => {
    if (validatorPassword(loginPassword.value) !== true) {
      loginPasswordSmall.textContent = "Password must be at least 8 characters."
    } else {
      loginPasswordSmall.textContent = ''
    }
  })

}

function validatorEmail(email) {
  let emailInput = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/
  return emailInput.test(email)
}

function validatorPassword(password) {
  let passwordPattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*]{8,16}$/
  return passwordPattern.test(password)
}

function validatorName(username) {
  let namePattern = /^[A-Za-zÀ-ÖØ-öø-ÿ'\- ]{2,50}$/
  return namePattern.test(username)
}