function worldSwimmingRecord(input){
    let record = Number(input[0]);
    let distance = Number(input[1]);
    let timeForOneM = Number(input[2]);
    
    let time = distance * timeForOneM;
    let delaydistance = Math.floor(distance / 15);
    let delay = delaydistance * 12.5;
    let totaltime = time + delay;
    
    let diff = Math.abs(totaltime - record);
    if (totaltime < record) {
        console.log(`Yes, he succeeded! The new world record is ${totaltime.toFixed(2)} seconds.`);
    } else {
        console.log(`No, he failed! He was ${diff.toFixed(2)} seconds slower.`);
    }
    
    
    }
    worldSwimmingRecord(["10464",
    "1500",
    "20"])
    
    
