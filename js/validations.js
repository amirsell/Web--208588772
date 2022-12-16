
const myForm = document.querySelector('.sign-up-form')
const firstNameInput = document.querySelector('#first-name')
const lastNameInput = document.querySelector('#last-name')
const emailInput = document.querySelector('#email')
const pswdInput = document.querySelector('#password')
const toasts = document.getElementById('toasts')
const types = ['info', 'success', 'error']

function createNotification(message, type = 'info') {
    const notify = document.createElement('div')
    notify.classList.add('toast')
    notify.classList.add(type)
    notify.innerText = message
    toasts.appendChild(notify)
    setTimeout(() => {
        notify.remove()
    }, 3000)
}

const resetInputs = () => {
    firstNameInput.value = ''
    lastNameInput.value = ''
    pswdInput.value = ''
    emailInput.value = ''
}

const onSubmit = e => {
    e.preventDefault()
    if (firstNameInput.value === '' || lastNameInput.value === ''|| emailInput.value === '' || pswdInput.value === '') {
        createNotification('Please insert all fields','error')
        return
    }
    if (pswdInput.value.length<8){
        createNotification('Password must be at least 8 digits','error')
        return
    }

    if(!isNaN(firstNameInput.value) || !isNaN(lastNameInput.value)){
        createNotification('A name can not contain numbers','error')
        return
    }

    let currentUsers = JSON.parse(localStorage.getItem('pizza-users')) || [];
    if (currentUsers.some(({ email }) => email === emailInput.value)) {
        createNotification('Email already exists','error')
        return
    }

    const newUser = {
        email: emailInput.value,
        password: pswdInput.value,
        fullName: `${firstNameInput.value} ${lastNameInput.value}`
    }
    const newUsers = [...currentUsers, newUser]
    localStorage.setItem('pizza-users', JSON.stringify(newUsers))
    createNotification('The user has been created','success')
    resetInputs()
}

myForm.addEventListener('submit', onSubmit )

