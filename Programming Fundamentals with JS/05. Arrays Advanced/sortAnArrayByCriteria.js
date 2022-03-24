function sortAnArrayByCriteria(array) {
    array.sort();
    array.sort((a, b) => a.length - b.length);
    console.log(array.join('\n'))
}
sortAnArrayByCriteria(['Isaccs', 'Aheodor', 'Jacksd', 'Harrison', 'George'])