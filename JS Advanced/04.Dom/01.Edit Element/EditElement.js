function editElement(element, replaced, replacer) {
    const text = element.textContent;
    const match = new RegExp(replaced, 'g')
    const result = text.replace(match, replacer);
    element.textContent = result;
}