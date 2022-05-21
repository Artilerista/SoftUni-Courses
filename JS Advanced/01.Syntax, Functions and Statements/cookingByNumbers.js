function cookingByNumbers(num, ...params) {
    num = Number(num);
    for (const command of params) {
        if (command === 'chop') {
            num /= 2;
        } else if (command === 'dice') {
            num = Math.sqrt(num);
        } else if (command === 'spice') {
            num++;
        } else if (command === 'bake') {
            num *= 3;
        } else if (command === 'fillet') {
            num = num * 0.80;
        }
        console.log(num);
    }
}
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet')