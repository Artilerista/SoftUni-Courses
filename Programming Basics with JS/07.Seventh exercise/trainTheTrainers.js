function trainTheTrainers(input) {
    let index = 0;
    let numberOfGrades = Number(input[index]);
    index++;
    let command = input[index];
    index++;
    let totalCounter = 0;
    let totalGrade = 0;
    while (command !== 'Finish') {
        let exam = command;
        let currentGrade = 0;
        let currentCounter = 0;
        for (i = 1; i <= numberOfGrades; i++) {
            let grade = Number(input[index]);
            index++;
            currentGrade += grade;
            currentCounter++;
        }
        totalCounter+=currentCounter;
        totalGrade += currentGrade;
        let currentAvgGrade = currentGrade / currentCounter;
        console.log(`${exam} - ${currentAvgGrade.toFixed(2)}.`);
        command = input[index];
        index++;
    }
    let totalAvgGrade = totalGrade / totalCounter;
    console.log(`Student's final assessment is ${totalAvgGrade.toFixed(2)}.`);
}
trainTheTrainers(["3",
    "Arrays",
    "4.53",
    "5.23",
    "5.00",
    "Lists",
    "5.83",
    "6.00",
    "5.42",
    "Finish"])
