function encodeAndDecodeMessages() {
    let main = document.getElementById('main').children;
    let firstText = main[0].querySelector('textarea');
    let firstButton = main[0].querySelector('button');
    let secondText = main[1].querySelector('textarea');
    let secondButton = main[1].querySelector('button');
    firstButton.addEventListener('click', encode);
    secondButton.addEventListener('click', decode);
    function encode (){
        let text = '';
        for (const char of firstText.value) {
            text += String.fromCharCode(char.charCodeAt() + 1);
        }
        secondText.value = text;
        firstText.value = '';
    }
    function decode () {
        let text = '';
        for (const char of secondText.value) {
            text += String.fromCharCode(char.charCodeAt() - 1);
        }
        secondText.value = text;
    }
   
}