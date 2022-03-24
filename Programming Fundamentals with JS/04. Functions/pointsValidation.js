function pointsValidation(array) {
    let x1 = array[0];
    let y1 = array[1];
    let x2 = array[2];
    let y2 = array[3];
    function firstCheck(x1, y1) {
        return Math.sqrt(Math.pow(x1, 2) + Math.pow(y1, 2));
    }
    if (firstCheck(x1, y1) === Math.trunc(firstCheck(x1, y1))) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }
    function secondCheck(x2, y2) {
        return Math.sqrt(Math.pow(x2, 2) + Math.pow(y2, 2));
    }
    if (secondCheck(x2, y2) === Math.trunc(secondCheck(x2, y2))) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }
    function thirdCheck(x1, y1, x2, y2) {
        return Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
    }
    if (thirdCheck(x1, y1, x2, y2) === Math.trunc(thirdCheck(x1, y1, x2, y2))) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }
}
pointsValidation([3, 0, 0, 4])