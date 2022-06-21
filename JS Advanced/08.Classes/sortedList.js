class List {
    constructor() {
        this.arr = [];
        this.size = this.arr.length;
    }
    add(n) {
        this.arr.push(n);
        this.size = this.arr.length;
        this.arr.sort((a, b) => a - b);
    }
    remove(index) {
        if (index >= 0 && index < this.size) {
            this.arr.splice(index, 1);
        } else {
            throw new Error('Invalid Index');
        }
        this.size = this.arr.length;
    }
    get(index) {
        if (index >= 0 && index < this.size) {
            return this.arr[index];
        } else {
            throw new Error('Invalid Index');
        }
    }
}
let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
