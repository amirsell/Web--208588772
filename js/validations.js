

const myForm  =document.querySelector('#formVal')
const firstNameInput = document.querySelector('#first-name')
const lastNameInput = document.querySelector('#last-name')
const emailInput = document.querySelector('#email')
const pswdInput = document.querySelector('#password')
const msg = document.querySelector('.error-messages')
const userList =document.querySelector('.users')

const onSubmit = (e )=>{
    e.preventDefault()
    if (firstNameInput.value === '' || lastNameInput.value === ''|| emailInput.value === '' || pswdInput.value === '') {
        msg.innerHTML = ' Please enter all fields'
        msg.classList.add('error-messages')
        setTimeout(() => {
            msg.innerHTML = ''
            msg.classList.remove('error-messages')
        }, 1500)
    }
        // console.log('success')
        const li = document.createElement('li')
        li.innerHTML= `${firstNameInput.value}: ${emailInput.value}: ${lastNameInput.value}: ${pswdInput.value}`
        userList.appendChild(li)

        firstNameInput.value=''
        lastNameInput.value=''
        pswdInput.value=''
        emailInput.value=''
}

myForm.addEventListener('submit', onSubmit)
