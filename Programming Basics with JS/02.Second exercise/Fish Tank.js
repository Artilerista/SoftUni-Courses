function fishTank(input){
    let lenght = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);
    let percent = Number(input[3]);
    let aquarium = lenght * width * height;
    let liters = aquarium / 1000;
    let occupiedliters = liters * (percent / 100);
    let neededliters = liters - occupiedliters;
    console.log(neededliters);
}
fishTank(['85','75','47','17'])