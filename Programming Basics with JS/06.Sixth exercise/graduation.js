function graduation(input) {
    let name = input[0];
    let index = 1;
    let grade = 1;
    let n = Number(input[index]);
    let average = 0;
    let isGraduated = true;
    while (grade <= 12) {
        if (n < 4){
            index++;
            n = Number(input[index]);
            if (n < 4){
                console.log(`${name} has been excluded at ${grade} grade`);
                isGraduated = false;
                break;
            }
            continue;
        }
        average += n;
        grade++;
        index++;
        n = Number(input[index]);
    }
    let averageN = average / 12;
    if(isGraduated)
    console.log(`${name} graduated. Average grade: ${averageN.toFixed(2)}`);
}
graduation(["Mimi", 
"5",
"6",
"5",
"2",
"5",
"6",
"6",
"2",
"3"])

