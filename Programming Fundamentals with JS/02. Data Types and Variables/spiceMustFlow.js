function spiceMustFlow(startingYield) {
    let days = 0;
    let mined = 0;
    while (startingYield >= 100) {
        days++;
        mined += startingYield - 26;
        startingYield-=10;
    }
    console.log(days);
    if(days !== 0){
        console.log(`${mined - 26}`);
    } else {
        console.log(mined)
    }
}
spiceMustFlow(90)