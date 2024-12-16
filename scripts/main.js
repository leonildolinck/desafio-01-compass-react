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
      subscribeEmailSmall.textContent = 'You must fill all the fields!'
      subscribeEmailSmall.style.color = '#7A1745'
    } else if (
      validatorEmail(subscribeEmail.value) === true &&
      validatorName(subscribeName.value) === true
    ) {
      subscribeEmailSmall.textContent = ''
      subscribeNameSmall.textContent = ''      
      localStorage.setItem('name', subscribeEmail.value)
      localStorage.setItem('email', subscribeName.value)

      const form = document.querySelector('.subscribe-form')
      const thankYouMessage = document.querySelector('.thank-you-message')
      form.classList.add('hidden')
      thankYouMessage.classList.add('visible')

    } else {
      console.log('not valid')
    }
  })
}

if(loginForm) {
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault()
  
    if (loginEmail.value == '' || loginPassword.value == '') {
      loginEmailSmall.textContent = 'You must fill all the fields!'
      loginEmailSmall.style.color = '#7A1745'     
    } else if (
      validatorEmail(loginEmail.value) === true &&
      validatorPassword(loginPassword.value) === true
    ) {
      loginEmailSmall.textContent = ''
      loginPasswordSmall.textContent = ''
      window.location.href = 'kanban.html'
    } else {
      console.log('not valid')
    }
  })
}


if(subscribeForm) {
  subscribeEmail.addEventListener('keyup', () => {
    if (validatorEmail(subscribeEmail.value) !== true) {
      subscribeEmailSmall.textContent = 'The address must be : example@example.com'
      subscribeEmailSmall.style.color = '#7A1745'
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
      loginEmailSmall.textContent = 'The address must be : example@example.com'
      loginEmailSmall.style.color = '#7A1745'
    } else {
      loginEmailSmall.textContent = ''
    }
  })

  loginPassword.addEventListener('keyup', () => {
    if (validatorPassword(loginPassword.value) !== true) {
      loginPasswordSmall.textContent = "Password must be at least 8 characters, 1 uppercase, 1 number and 1 especial character."
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


document.querySelector('.arrow-left').addEventListener('click', function() {
  document.querySelector('.container-kanban').scrollBy({ left: -200, behavior: 'smooth' });
})

document.querySelector('.arrow-right').addEventListener('click', function() {
  document.querySelector('.container-kanban').scrollBy({ left: 200, behavior: 'smooth' });
})

