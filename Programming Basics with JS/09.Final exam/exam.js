function exam(input) {
    let students = Number(input[0]);
    let index = 1;
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let sumGrade = 0
    for (i = 1; i <= students; i++) {
        let grade = Number(input[index]);
        index++;
        if (grade >= 2.00 && grade <= 2.99) {
            p1++;
        } else if (grade >= 3.00 && grade <= 3.99) {
            p2++;
        } else if (grade >= 4.00 && grade <= 4.99) {
            p3++;
        } else if (grade >= 5.00) {
            p4++;
        }
        sumGrade += grade;
    }
    let percentP1 = p1 / students * 100;
    let percentP2 = p2 / students * 100;
    let percentP3 = p3 / students * 100;
    let percentP4 = p4 / students * 100;
    let avg = sumGrade / students;
    console.log(`Top students: ${percentP4.toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${percentP3.toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${percentP2.toFixed(2)}%`);
    console.log(`Fail: ${percentP1.toFixed(2)}%`);
    console.log(`Average: ${avg.toFixed(2)}`);

}
exam(["10",
    "3.00",
    "2.99",
    "5.68",
    "3.01",
    "4",
    "4",
    "6.00",
    "4.50",
    "2.44",
    "5"])
