function footballKit(input) {
    let TshirtPrice = Number(input[0]);
    let GoalSum = Number(input[1]);
    let legs = TshirtPrice * 0.75;
    let socks = legs * 0.20;
    let TshirtAndLegs = TshirtPrice + legs;
    let Boots = TshirtAndLegs * 2;
    let sum = (Boots + socks + legs + TshirtPrice) * 0.85;
    let diff = Math.abs(sum - GoalSum);
    if (sum >= GoalSum) {
        console.log('Yes, he will earn the world-cup replica ball!');
        console.log(`His sum is ${sum.toFixed(2)} lv.`);
    } else {
        console.log('No, he will not earn the world-cup replica ball.');
        console.log(`He needs ${diff.toFixed(2)} lv. more.`);
    }
}
footballKit(["25",
    "100"])
