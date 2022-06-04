function extract(content) {
    const text = document.getElementById(content).textContent;
    console.log(text)
    const pattern = /\(([A-Z a-z 0-9]+)\)/g;
    let match = pattern.exec(text);
    const result = [];
    while (match != null) {
        result.push(match[1]);
        match = pattern.exec(text);
    }
    return result.join('; ');
}