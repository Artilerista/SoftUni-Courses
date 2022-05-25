function evenPositionElements(arr) {
    let result = arr.filter((x,i) => i % 2 == 0);
    console.log(result.join(' '));
}
evenPositionElements(['20', '30', '40', '50', '60'])