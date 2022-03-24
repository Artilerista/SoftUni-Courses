function cutAndReverse(text) {
    let firstHalf = text.substring(0 , text.length / 2);
    let secondHalf = text.substring(text.length / 2);
    let reverseFirst = firstHalf.split('').reverse().join('');
    let reverseSecond = secondHalf.split('').reverse().join('');
    console.log(reverseFirst);
    console.log(reverseSecond);
}
cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT')