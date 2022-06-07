function deleteByEmail() {
    let input = document.querySelector('label input');
    let table = [...document.querySelectorAll('tbody tr td')];
    for (let i = 1; i < table.length; i += 2) {
        let email = table[i].textContent;
        if (input.value === email) {
            table[i].parentElement.remove();
            document.getElementById('result').textContent = 'Deleted.'
            
            break;
        }
        document.getElementById('result').textContent = 'Not found.'
        
    }
}