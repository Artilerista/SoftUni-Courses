function basketballEquipment(input){
    let annualfee = Number(input[0]);
    let sneakers = annualfee * 0.60;
    let tracksuit = sneakers * 0.80;
    let ball = tracksuit / 4;
    let accessories = ball / 5;
    let finalfee = annualfee + sneakers + tracksuit + ball + accessories;
    console.log(finalfee);
}
basketballEquipment(['365'])
