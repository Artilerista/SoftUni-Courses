function reverseString(name) {
    name = name.split('')
    name = name.reverse();
    name = name.join('');
    console.log(name);
}
reverseString('Hello')