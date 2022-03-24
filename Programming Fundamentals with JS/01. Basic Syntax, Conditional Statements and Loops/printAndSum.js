function printAndSum(n,m){
let sum = 0;
let num = '';
for(let i = n ; i <= m ; i++){
    sum+=i;
    num+= i + " ";
}
console.log(num);
console.log(`Sum: ${sum}`);
}
printAndSum(5, 10)