function signCheck(a, b, c) {
    let positive = (a, b, c) => 'Positive';
    let negative = (a, b, c) => 'Negative';
    if ((a < 0 && b < 0 && c > 0) || (a < 0 && b > 0 && c < 0) || 
    (a > 0 && b < 0 && c < 0) || (a > 0 && b > 0 && c > 0)){
        return positive(a,b,c);
    } else {
        return negative(a,b,c);
    }
}
signCheck(5, 12, -15)