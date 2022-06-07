function validate() {
    let inputField = document.getElementById('email');
    inputField.addEventListener('change', valid);
    function valid(event) {
        let regex = /[a-z]+@[a-z]+\.[a-z]+/g;
        if (regex.test(inputField.value)) {
            inputField.classList.remove('error');
        } else {
            inputField.classList.add('error');
        }
    }
}