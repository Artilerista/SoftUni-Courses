function areaOfFigures(input){
let figure = input[0];
let area = 0;
if(figure === 'square'){ 
    let side = Number(input[1]);
    area = side * side;
}else if(figure === 'rectangle'){
    let sidea = Number(input[1]);
    let sideb = Number(input[2]);
    area = sidea * sideb;
}else if(figure === 'circle'){
    let radius = Number(input[1]);
    area = Math.PI * (radius * radius);
}else if(figure === 'triangle'){
    let side = Number(input[1]);
    let sideHeight = Number(input[2]);
    area = (side * sideHeight) / 2;
}
console.log(area.toFixed(3));
    


}
areaOfFigures(["square", "5"])
