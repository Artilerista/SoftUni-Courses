function addItem() {
    let input = document.getElementById('newItemText');
    let liElement = document.createElement('li');
    liElement.textContent = input.value;
    let ulElement = document.getElementById('items');
    if (liElement.textContent.length !== 0) {
        ulElement.appendChild(liElement);
    };
    input.value = '';
    let aElement = document.createElement('a');
    aElement.textContent = '[Delete]';
    aElement.href = '#';
    liElement.appendChild(aElement);
    aElement.addEventListener('click', onClick);
    function onClick () {
        aElement.parentElement.remove();
    }
}