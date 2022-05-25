function biggerHalf(arr) {
    let sorted = arr.sort((a, b) => a - b);
    let half = Math.floor(sorted.length / 2);
    if (sorted.length % 2 === 0) {
        return sorted.slice(-half);
    } else {
        return sorted.slice(-half - 1);
    }
}
biggerHalf([4, 7, 2, 5])