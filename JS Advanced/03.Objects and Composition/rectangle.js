function rectangle(width, height, paint) {
    const color = paint[0].toUpperCase() + paint.substring(1);
    return {
        width: width,
        height: height,
        color: color,
        calcArea: () => {
            return width * height;
        }
    };
}
let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());
