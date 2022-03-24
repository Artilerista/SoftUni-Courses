function cinema(input) {
    let project = input[0];
    let r = Number(input[1]);
    let c = Number(input[2]);
    let income = 0;
    let places = r * c;
    if (project === 'Premiere') {
        income = places * 12.00;
    } else if (project === 'Normal') {
        income = places * 7.50;
    } else {
        income = places * 5.00;
    }
    console.log(`${income.toFixed(2)} leva`)

}
cinema(["Premiere",
    "10",
    "12"])
