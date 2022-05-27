function negativePositiveNumbers(arr) {
    let list = [];
    for (const num of arr) {
        if(num < 0){
            list.unshift(num);
        } else {
            list.push(num);

        }

    }
    console.log(list.join('\n'));
}
negativePositiveNumbers([7, -2, 8, 9])