function toggle() {
    let text = document.querySelector('#extra');
    let operation = document.querySelector('.head span');
    
    if(operation.textContent == 'More'){
        operation.textContent = 'Less';
        text.style.display = 'block';
    } else {
        operation.textContent = 'More';
        text.style.display = 'none';
    }
}