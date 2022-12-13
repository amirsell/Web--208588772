const emailInputEl = document.querySelector('#email');
const passwordInputEl = document.querySelector('#password');
const loginButtonEl = document.querySelector('.login-btn');

const users = [
  { email: 'adi.mizrahi@anyvision.co', password: '123456' }
]


const loginUser = details => {
  const { email, password } = details
  // select * from users where x = email and y = password
  const user = users.find(user => user.email === email && user.password === password)
  if (!user) {
    alert('Username or password incorrect')
    return
  }
  localStorage.setItem('user-token', '1234566')
  window.open('/index.html', "_self")
}

const onLoginButtonClick = e => {
  e.preventDefault();
  const emailValue = emailInputEl.value;
  const passwordValue = passwordInputEl.value;
  // validation: is email format correct, is password in certain length
  loginUser({ email: emailValue, password: passwordValue })
}

loginButtonEl.addEventListener('click', onLoginButtonClick);