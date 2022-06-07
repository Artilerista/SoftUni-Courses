function focused() {
    let input = [...document.querySelectorAll('div input')];
    input.forEach(i => {
        i.addEventListener('focus', onFocus);
        i.addEventListener('blur', onBlured);
    });

    function onFocus(event) {
        event.target.parentElement.classList.add('focused');
    }
    function onBlured(event) {
        event.target.parentElement.classList.remove('focused');
    }
}
