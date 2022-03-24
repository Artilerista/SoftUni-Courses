function sortNumbers(n, m, c) {
    if (n >= m && n >= c) {
        console.log(n);
    } else if (m >= n && m >= c) {
        console.log(m);
    } else if (c >= n && c >= m) {
        console.log(c);
    }
    if(n >= m && n <= c){
        console.log(n);
    } else if (n >= c && n <= m){
        console.log(n);
    } else if (m >= n && m <= c){
        console.log(m);
    } else if (m <= n && m >= c){
        console.log(m);
    } else if (c >= n && c <= m){
        console.log(c);
    } else if (c <= n && c >= m){
        console.log(c);
    } 
    if (n <= m && n <= c) {
        console.log(n);
    } else if (m <= n && m <= c) {
        console.log(m);
    } else if (c <= n && c <= m) {
        console.log(c);
    }
}

sortNumbers(2, 1, 3)
sortNumbers(-2,1,3)
sortNumbers(0,0,2)