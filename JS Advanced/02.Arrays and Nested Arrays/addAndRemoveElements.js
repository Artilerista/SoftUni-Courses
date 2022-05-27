function addAndRemoveElements(array) {
    let result = [];
    let num = 1;
    for (const commnad of array) {
        if(commnad === 'add'){
            result.push(num);
        } else {
            result.pop();
        }
        num++;
    }
    if(result.length <= 0) {
        console.log('Empty')
    } else {
        console.log(result.join('\n'));
    }
}
addAndRemoveElements(['add',
    'add',
    'add',
    'add']
)