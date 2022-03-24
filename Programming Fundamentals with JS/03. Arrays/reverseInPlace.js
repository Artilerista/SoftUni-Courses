function reverseInPlace(arr){
    let j = arr.length - 1;
for(let i = 0 ; i <= (arr.length - 1) / 2 , j >= (arr.length - 1) / 2 ; i++ , j--){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    
}
console.log(arr.join(' '));


}
reverseInPlace(['a', 'b', 'c', 'd', 'e'])