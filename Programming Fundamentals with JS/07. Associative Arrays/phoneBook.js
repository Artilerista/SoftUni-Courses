function phoneBook(array) {
    let result = new Map;
    for (let element of array) {
        let [name , phoneNumber] = element.split(' ');
        result.set(name , phoneNumber);
    }
    for (let [name , phone] of result) {
       console.log(name, '->', phone);
    }
}
phoneBook(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344']
)