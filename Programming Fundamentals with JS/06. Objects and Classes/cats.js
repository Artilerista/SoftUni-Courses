function cats(array) {
    class Cat {
        constructor(catName, age) {
            this.catName = catName;
            this.age = age;
        }
        mew() {
            console.log(`${this.catName}, age ${this.age} says Meow`);
        }
    }
    let cats = [];
    for (let element of array) {
        let token = element.split(' ');
        let cat = new Cat(token[0], Number(token[1]));
        cats.push(cat);
    }
    for (let cat of cats) {
        cat.mew()
    }
}
cats(['Mellow 2', 'Tom 5'])