function rotateArray(array,rotation) {
    for (let i = 0; i < rotation; i++) {
        let num = array.pop();
        array.unshift(num);
    }
    console.log(array.join(' '));
}
rotateArray(['1',
    '2',
    '3',
    '4'],
    2
)