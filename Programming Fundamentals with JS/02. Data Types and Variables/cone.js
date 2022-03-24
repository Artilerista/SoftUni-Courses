function cone(radius,height) {
let baseArea = Math.PI * (Math.pow(radius , 2));
let sArea = Math.sqrt((Math.pow(radius , 2) + Math.pow(height , 2)));
let lArea = Math.PI * radius * sArea;
let area = baseArea + lArea;
let volume = (1/3) * Math.PI * (Math.pow(radius , 2)) * height;
console.log(`volume = ${volume.toFixed(4)}`);
console.log(`area = ${area.toFixed(4)}`);


}
cone(3,5)