function ladybugs(array) {
    let arr = array.shift();
    let field = new Array(arr).fill(0);
    let ladybugs = array.shift().split(' ');
    for (let num of ladybugs) {
        if (num >= 0 && num < arr) {
            field[Number(num)] = 1;
        }
    }
    for (let i of array) {
        let command = i.split(' ');
        let startIndex = Number(command[0]);
        if (field[startIndex] === 1) {
            let currentIndex = startIndex;
            let direction = command[1];
            let endIndex = Number(command[2]);
            if (direction === 'left') {
                endIndex *= -1;
            }

            while (field[currentIndex] === 1) {
                currentIndex += endIndex;
            }
            field[startIndex] = 0;
            if (currentIndex >= 0 && currentIndex < arr) {
                field[currentIndex] = 1;
            }
        }
    }
    console.log(field.join(' '))


}
ladybugs([3, '0 1',
    '0 right 1',
    '2 right 1']
)