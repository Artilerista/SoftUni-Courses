function moving(input){
let w = Number(input[0]);
let l = Number(input[1]);
let h = Number(input[2]);
let index = 3;
let comand = input[index];
let space = w * l * h;
while (comand !== 'Done'){
    let box = Number(comand);
    space-=box;
    if(space < 0 ){
        console.log(`No more free space! You need ${Math.abs(space)} Cubic meters more.`);
        break;
    }
    index++;
    comand = input[index];
}
if (comand === 'Done'){
    console.log(`${space} Cubic meters left.`);
}
}
moving(["10", 
"1",
"2",
"4", 
"6",
"Done"])

