function integerAndFloat(q, w, e) {
    let sum = q + w + e;
    if (sum % (Math.round(sum)) === 0) {
        console.log(`${sum} - Integer`);
    } else {
        console.log(`${sum} - Float`);
    }
}
integerAndFloat(9, 100, 1.1)