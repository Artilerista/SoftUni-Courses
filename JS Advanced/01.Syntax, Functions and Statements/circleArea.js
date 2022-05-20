function circleArea(argument) {
    if(typeof argument === 'number'){
        let sum = argument ** 2 * Math.PI;
        console.log(sum.toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${typeof argument}.`);
    }
}
circleArea('name')