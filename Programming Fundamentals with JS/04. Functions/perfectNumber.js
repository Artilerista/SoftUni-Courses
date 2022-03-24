//function perfectNumber(num) {
//   let sum = 0;
//   for (let i = 1; i < num; i++) {
//       if(num % i === 0){
//           sum+=i
//        }
//        
//   }
//  if(sum === num){
//       console.log("We have a perfect number!");
//    } else {
//        console.log("It's not so perfect.");
//    }
//}
//perfectNumber(1236498)

function perfectNumber(num) {
    function isNumberPerfect(num) {
        let sum = 0;
        for (let i = 1; i < num; i++) {
            if (num % i === 0) {
                sum += i
            }
        }
        if(sum === num){
            return true;
        } else {
            return false;
        }
    }
    if(isNumberPerfect(num)){
        console.log("We have a perfect number!");
    } else{
        console.log("It's not so perfect.");
    }
}
perfectNumber(1236498)