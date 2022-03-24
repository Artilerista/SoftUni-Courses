function repainting(input){
    let nylon = Number(input[0]);
    let pant = Number(input[1]);
    let thinner = Number(input[2]);
    let hours = Number(input[3]);
    let matsprice = (nylon + 2) * 1.50 + (pant * 1.10) * 14.50 + thinner * 5 + 0.40;
    let workforonehour = matsprice * 0.30;
    let work = workforonehour * hours;
    let totalprice = work + matsprice;
    console.log(totalprice);
}
repainting(['10','11','4','8'])