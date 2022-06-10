function solution() {
    let word = '';
    function append(str) {
        word += str;
    }
    function removeStart(n) {
        word = word.slice(n);
    }
    function removeEnd(n) {
        word = word.slice(0, -n);
    }
    function print() {
        console.log(word);
    }

    return {
        append,
        removeStart,
        removeEnd,
        print
    };
}
let firstZeroTest = solution();
firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();
