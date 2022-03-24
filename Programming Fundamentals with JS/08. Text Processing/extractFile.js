function extractFile(text) {
    let lastIndex = text.lastIndexOf('\\');
    let newText = text.substring(lastIndex + 1);
    let lastIndexOfDot = newText.lastIndexOf('.');
    let filleName = newText.substring(0, lastIndexOfDot);
    let extenstion = newText.substring(lastIndexOfDot + 1);
    console.log(`File name: ${filleName}`);
    console.log(`File extension: ${extenstion}`);
}
extractFile('C:\\Internal\\training-internal\\Template.pptx')