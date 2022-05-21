function GreatestCommonDivisorGCD (n1,n2) {
    while (n1 != n2) {
        if(n1 > n2) {
            n1-= n2;
        } else {
            n2-= n1;
        }
    }
    console.log(n1);
}
GreatestCommonDivisorGCD(2154, 458)