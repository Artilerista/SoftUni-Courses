function employees(array) {
    class Employ {
        constructor(name , personalNumber){
            this.name = name;
            this.personalNumber = personalNumber;
        }
        employes(){
            console.log(`Name: ${this.name} -- Personal Number: ${this.personalNumber}`);
        }
    }
    let list = [];
    for (let element of array) {
      let employ = new Employ (element , element.length);
      list.push(employ);
    }
    for (let element of list) {
        element.employes(element);
    }
}
employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]
)