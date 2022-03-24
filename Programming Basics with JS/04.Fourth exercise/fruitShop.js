function fruitShop(input) {
    let fruit = input[0];
    let day = input[1];
    let quantity = Number(input[2]);
    let finalsum = 0
    if (day === 'Monday' || day === 'Tuesday' || day === 'Wednesday' || day === 'Thursday' || day === 'Friday') {
        switch (fruit) {
            case 'banana': finalsum = quantity * 2.50; break;
            case 'apple': finalsum = quantity * 1.20; break;
            case 'orange': finalsum = quantity * 0.85; break;
            case 'grapefruit': finalsum = quantity * 1.45; break;
            case 'kiwi': finalsum = quantity * 2.70; break;
            case 'pineapple': finalsum = quantity * 5.50; break;
            case 'grapes': finalsum = quantity * 3.85; break;
            default: console.log('error'); break;
        }
    } else if (day === 'Saturday' || day === 'Sunday') {
        switch (fruit) {
            case 'banana': finalsum = quantity * 2.70; break;
            case 'apple': finalsum = quantity * 1.25; break;
            case 'orange': finalsum = quantity * 0.90; break;
            case 'grapefruit': finalsum = quantity * 1.60; break;
            case 'kiwi': finalsum = quantity * 3.00; break;
            case 'pineapple': finalsum = quantity * 5.60; break;
            case 'grapes': finalsum = quantity * 4.20; break;
            default: console.log('error'); break;
        }
    } else{
        console.log('error');
    }
    if (finalsum !== 0) {
        console.log(finalsum.toFixed(2));
    }
}
fruitShop(["apple",
"Workday",
"2"])





