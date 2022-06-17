function validate() {
    let inputField = document.getElementById('email');
    inputField.addEventListener('change', email);
    function email(event) {
        let regex = /[a-z0-9]+@[a-z0-9].[a-z0-9]/
        if(!regex.test(inputField.value)){
            inputField.classList.add('error') ; 
        } else {
            inputField.classList.remove('error');
        }
    }
}