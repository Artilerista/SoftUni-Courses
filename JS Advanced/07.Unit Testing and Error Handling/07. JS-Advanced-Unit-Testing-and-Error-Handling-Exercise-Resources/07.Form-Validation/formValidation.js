function validate() {
    let checkbox = document.getElementById('company');
    checkbox.addEventListener('change', onChecked);
    function onChecked() {
        let companyInfo = document.getElementById('companyInfo');
        if (checkbox.checked === false) {
            companyInfo.style.display = 'none'
        } else {
            companyInfo.style.display = 'block'
        }
    }
    let btn = document.getElementById('submit');
    btn.addEventListener('click', onClick);
    function onClick(event) {
        event.preventDefault();
        let checkedBox = document.getElementById('company');
        let invalid = [];
        let username = document.getElementById('username');
        let password = document.getElementById('password');
        let confirmPassword = document.getElementById('confirm-password');
        let email = document.getElementById('email');
        let usernameRegex = /^[A-Za-z0-9]{3,20}$/;
        let passwordRegex = /^[\w]{5,15}$/;
        let emailRegex = /.*@.*\..*/;
        if (checkedBox.checked) {
            let regex = /^[0-9]{4}$/;
            let companyNumber = document.getElementById('companyNumber')
            if (regex.test(companyNumber.value) === false) {
                invalid.push(companyNumber);
            } else {
                companyNumber.style.border = 'none';
            }
        }
        if (usernameRegex.test(username.value) === false) {
            invalid.push(username);
        } else {
            username.style.border = 'none';
        }
        if ((passwordRegex.test(password.value) === false) || password.value !== confirmPassword.value) {
            invalid.push(password);
            invalid.push(confirmPassword);
        }else {
            password.style.border = 'none';
            confirmPassword.style.border = 'none';
        }
        if (emailRegex.test(email.value) === false) {
            invalid.push(email);
        } else {
            email.style.border = 'none';
        }
        let validDiv = document.getElementById('valid');
        invalid.forEach(field => field.style.borderColor = 'red');
        if (!invalid.length) {
            validDiv.style.display = 'block';
        } else {
            validDiv.style.display = 'none';
        }
    }
}
