function oscars(input){
   let index = 0;
   let actor = input[index];
   index++;
   let pointsOfAcademy = Number(input[index]);
   index++;
   let countEvaluators = Number(input[index]);
   index++;
   let isNominate = false;
   for(i = 1 ; i <= countEvaluators ; i++){
       let nameOfEvaluator = input[index];
       index++;
       let pointsOfEvaluator = Number(input[index]);
       index++;
       pointsOfAcademy+= (nameOfEvaluator.length * pointsOfEvaluator) / 2;
       if (pointsOfAcademy > 1250.5){
           console.log(`Congratulations, ${actor} got a nominee for leading role with ${pointsOfAcademy.toFixed(1)}!`);
           isNominate = true;
           break;
       }
   }
   let diff = Math.abs(pointsOfAcademy - 1250.5);
    if (!isNominate){
        console.log(`Sorry, ${actor} you need ${diff.toFixed(1)} more!`);
    }
}
oscars(["Zahari Baharov",
"205",
"4",
"Johnny Depp",
"45",
"Will Smith",
"29",
"Jet Lee",
"10",
"Matthew Mcconaughey",
"39"])
