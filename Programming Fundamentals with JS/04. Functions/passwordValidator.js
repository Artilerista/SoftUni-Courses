function passwordValidator(string) {
    let splitedString = string.split('');
    function isPasswordLength(string) {
        if (string.length >= 6 && string.length <= 10) {
            return true;
        } else {
            return false;
        }
    }
    function isOnlyLetterAndDigits(splitedString) {
        let newArray = [];
        for (let i = 0; i < splitedString.length; i++) {
            let currentChar = splitedString[i].charCodeAt(0);
            if ((currentChar >= 48 && currentChar <= 57) ||
                (currentChar >= 65 && currentChar <= 90) ||
                (currentChar >= 97 && currentChar <= 122)) {
                newArray.push(String.fromCharCode(currentChar));
            }
        }
        if (newArray.join(' ') == splitedString.join(' ')) {
            return true;
        } else {
            return false;
        }
    }
    function isHaveAtLeastTwoDigits(splitedString) {
        let counter = 0;
        for (let i = 0; i < splitedString.length; i++) {
            let currentChar = splitedString[i].charCodeAt(0);
            if(currentChar >= 48 && currentChar <= 57){
                counter++;
            }
        }
        if(counter >= 2){
            return true;
        } else {
            return false;
        }
    }
    if(isPasswordLength(string) && isOnlyLetterAndDigits(splitedString) && isHaveAtLeastTwoDigits(splitedString)){
        console.log("Password is valid");
    } 
    if(!isPasswordLength(string)){
        console.log("Password must be between 6 and 10 characters");
    }
    if(!isOnlyLetterAndDigits(splitedString)){
        console.log("Password must consist only of letters and digits");
    }
    if(!isHaveAtLeastTwoDigits(splitedString)){
        console.log("Password must have at least 2 digits");
    }
}
passwordValidator('logIn')