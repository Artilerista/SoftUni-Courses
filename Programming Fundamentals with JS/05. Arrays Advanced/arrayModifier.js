function arrayModifier(array) {
    let nums = array.shift().split(' ').map(Number);
    for (let i = 0; i < array.length; i++) {
        let token = array[i].split(' ');
        let command = token[0];
        let firstIndex = Number(token[1]);
        let secondIndex = Number(token[2]);
        if (command === 'swap') {
            let box = nums[firstIndex];
            nums[firstIndex] = nums[secondIndex];
            nums[secondIndex] = box;
        } else if (command === 'multiply') {
            let sum = nums[firstIndex] * nums[secondIndex];
            nums.splice(firstIndex,1,sum);
        } else if (command === 'decrease') {
            nums = nums.map(x => x - 1);
        } else if (command === 'end') {
            break;
        }
    }
    console.log(nums.join(', '));

}
arrayModifier([
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
]
)