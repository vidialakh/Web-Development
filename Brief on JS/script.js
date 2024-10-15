function validate(e) {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const pass = document.getElementById("password").value;
    const age = document.getElementById("age").value;
    const msgbox = document.getElementById("message");
    let message = '';
    if (email === '') {
        message = 'Enter the E-Mail.';
        msgbox.style.color = 'red';
    } else if (pass === '') {
        message = 'Enter the Password.';
        msgbox.style.color = 'red';
    } else if (age === '') {
        message = 'Enter the age.';
        msgbox.style.color = 'red';
    } else {
        message = 'Login Successful.';
        msgbox.style.color = 'green';
    }
    msgbox.innerText = message;
}