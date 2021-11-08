const form = document.querySelector('#register-form')
form.addEventListener('submit', event => {
    event.preventDefault()
    const phone = form.elements.phone.value;
    const username = form.elements.username.value;
    const password = form.elements.Password.value;
    const confirmPassword = form.elements.CPassword.value;
    if(password !== confirmPassword){
        alert('password and confirm password must be same')
    } else if(phone.length !== 10){
        alert('Phone number must be 10 digits')
    } else if(isNaN(phone)) {
        alert('Enter a valid phone number')
    } else {
        alert('Successfully registered')
    }
})