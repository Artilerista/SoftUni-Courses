function examPreparation(input) {
    let badgrades = Number(input[0]);
    let index = 1;
    let comand = input[index];
    index++;
    let grade = Number(input[index]);
    let avg = 0;
    let numberExams = 0;
    let badgrade = 0;
    let isValid = true
    let nameExam;
    while (comand !== 'Enough') {
        nameExam = comand;
        numberExams++;
        avg += grade;
        if (grade <= 4) {
            badgrade++;
            if (badgrade === badgrades) {
                console.log(`You need a break, ${badgrade} poor grades.`);
                isValid = false;
                break;
            }
        }
        index++;
        comand = input[index];
        index++;
        grade = Number(input[index]);
    }
    let average = avg / numberExams;
    if(isValid){
        console.log(`Average score: ${average.toFixed(2)}`);
        console.log(`Number of problems: ${numberExams}`)
        console.log(`Last problem: ${nameExam}`);
    }
}
examPreparation(["3",
    "Money",
    "6",
    "Story",
    "4",
    "Spring Time",
    "5",
    "Bus",
    "6",
    "Enough"])
