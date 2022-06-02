function extractText() {
    const text = Array.from(document.querySelectorAll('li'));
    const result = text.map(x => x.textContent).join('\n');
    document.getElementById('result').value = result;
}