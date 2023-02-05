var email = ''
var phoneNumber = ''
var code = ''

const EmailFun = () => {
  email = document.getElementById('email').value
}

const Mobile_Fun = () => {
  phoneNumber = document.getElementById('number').value
}

const Country_codeFun = () => {
  code = document.getElementById('code').value
  console.log(code)
}

const submit = () => {
  if (phoneNumber.length < 10) {
    alert(' You have entered an invalid Mobile number')
  } else if (phoneNumber.length > 10) {
    alert(' You have entered an invalid Mobile number')
  } else if (email.length < 15) {
    alert(
      'You have entered an invalid email address -  It is too short - length sould be equal or more that 5 character excluding @gmail.com ',
    )
  } else if (!email.includes('@gmail.com')) {
    alert('You have entered an invalid email address')
  } else {
    localStorage.setItem('email', JSON.stringify(email))
    localStorage.setItem('phonenumber', JSON.stringify(phoneNumber))
    localStorage.setItem('Country_code', JSON.stringify(code))

    window.location.href = './thanks.html'
  }
}
