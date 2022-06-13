function calculator(a, b, c) {
    let n1 = null;
    let n2 = null;
    let result = null;
    return {
        init,
        add,
        subtract,
    };
    function init(f1, f2, fResult) {
        n1 = document.querySelector(f1);
        n2 = document.querySelector(f2);
        result = document.querySelector(fResult);
    }
    function add() {
        result.value = Number(n1.value) + Number(n2.value);
    }
    function subtract() {
        result.value = Number(n1.value) - Number(n2.value);
    }
}






