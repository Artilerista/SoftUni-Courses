function loadingBar(num) {
    let array = [];
    for (let i = 10; i <= 100; i+= 10) {
        if(num >= i){
            array.push('%')
        } else {
            array.push('.');
        }

    }
    if(num === 100){
        console.log(`${num}% Complete!`);
        console.log(`[${array.join('')}]`);
    } else {
        console.log(`${num}% [${array.join('')}]`);
        console.log('Still loading...');
    }
}
loadingBar(30)