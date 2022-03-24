function histogram(input) {
    let index = 0;
    let countn = Number(input[index]);
    index++;
    let p1Count = 0;
    let p2Count = 0;
    let p3Count = 0;
    let p4Count = 0;
    let p5Count = 0;
    for (i = 0; i < countn; i++) {
        let number = Number(input[index]);
        index++;
        if (number < 200) {
            p1Count++;
        } else if (number >= 200 && number < 400) {
            p2Count++;
        } else if (number >= 400 && number < 600) {
            p3Count++;
        } else if (number >= 600 && number < 800) {
            p4Count++;
        } else {
            p5Count++;
        }
    }
    let p1Percent = p1Count / countn * 100;
    let p2Percent = p2Count / countn * 100;
    let p3Percent = p3Count / countn * 100;
    let p4Percent = p4Count / countn * 100;
    let p5Percent = p5Count / countn * 100;

    console.log(p1Percent.toFixed(2) + '%');
    console.log(p2Percent.toFixed(2) + '%');
    console.log(p3Percent.toFixed(2) + '%');
    console.log(p4Percent.toFixed(2) + '%');
    console.log(p5Percent.toFixed(2) + '%');
}
histogram(["7",
"800",
"801",
"250",
"199",
"399",
"599",
"799"])

