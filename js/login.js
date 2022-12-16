
const emailInputEl = document.querySelector('#email');
const passwordInputEl = document.querySelector('#password');
const loginButtonEl = document.querySelector('.login-btn');


const loginUser = details => {

  const users = JSON.parse(localStorage.getItem('pizza-users'));

  if (!users) {
    alert('There are no users at all in the database')
    return
  }

  const { email, password } = details
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