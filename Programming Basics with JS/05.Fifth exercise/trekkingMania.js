function trekkingMania(input) {
    let index = 0;
    let countOfGroups = Number(input[index]);
    index++;
    let Musala = 0;
    let Monblan = 0;
    let Kilimandjaro = 0;
    let K2 = 0;
    let Everest = 0;
    for (i = 1; i <= countOfGroups; i++) {
        let numberOfGroupMembers = Number(input[index]);
        index++;
        if (numberOfGroupMembers <= 5) {
            Musala += numberOfGroupMembers;
        } else if (numberOfGroupMembers <= 12) {
            Monblan += numberOfGroupMembers;
        } else if (numberOfGroupMembers <= 25) {
            Kilimandjaro += numberOfGroupMembers;
        } else if (numberOfGroupMembers <= 40) {
            K2 += numberOfGroupMembers;
        } else {
            Everest += numberOfGroupMembers;
        }
    }
    let all = Musala + Monblan + Kilimandjaro + K2 + Everest;
    let pMusala = (Musala / all) * 100;
    let pMonblan = (Monblan / all) * 100;
    let pKilimandjaro = (Kilimandjaro / all) * 100;
    let pK2 = (K2 / all) * 100;
    let pEverest = (Everest / all) * 100;

    console.log(pMusala.toFixed(2) + '%');
    console.log(pMonblan.toFixed(2) + '%');
    console.log(pKilimandjaro.toFixed(2) + '%');
    console.log(pK2.toFixed(2) + '%');
    console.log(pEverest.toFixed(2) + '%');
}
trekkingMania(["10",
    "10",
    "5",
    "1",
    "100",
    "12",
    "26",
    "17",
    "37",
    "40",
    "78"])
