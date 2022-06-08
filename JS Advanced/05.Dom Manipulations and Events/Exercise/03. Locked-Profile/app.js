function lockedProfile() {
    let buttons = Array.from(document.querySelectorAll('button'));
    buttons.forEach(button => button.addEventListener('click', onClick));
    function onClick(event) {
        let button = event.target;
        let buttonFather = event.target.parentElement;
        let isUnlock = buttonFather.querySelector('input[type ="radio"][value ="unlock"]').checked;
        let info = buttonFather.querySelector('div');
        if (isUnlock) {
            if (button.textContent === 'Show more') {
                info.style.display = 'block';
                button.textContent = 'Hide it';
            } else if (button.textContent === 'Hide it') {
                info.style.display = '';
                button.textContent = 'Show more';
            }
        } 
    }
}