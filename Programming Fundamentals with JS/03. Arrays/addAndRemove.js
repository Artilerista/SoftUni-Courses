function addAndRemove(array) {
    let newArray = [];
    let allRemove = true;
    for (let i = 0; i < array.length; i++) {
        let index = array[i];
        if (index === 'add') {
            newArray.push(i + 1);
            allRemove = false;
        } else if (index === 'remove') {
            newArray.pop()
        }

    }
    if (allRemove || newArray.length <= 0) {
        console.log('Empty')
    } else {
        console.log(newArray.join(' '));
    }

}

addAndRemove(['add', 'remove', 'remove', 'remove'])