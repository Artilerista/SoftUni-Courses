function sumFirstLast(arr) {
    let nums = arr.map(x => Number(x));
    let sum = nums.pop() + nums.shift();
    console.log(sum);
}
sumFirstLast(['20', '30', '40'])