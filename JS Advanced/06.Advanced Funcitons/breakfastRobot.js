function solution() {
    let ingredients = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    }
    let recipe = {
        apple: {
            carbohydrate: 1,
            flavour: 2,
        },
        lemonade: {
            carbohydrate: 10,
            flavour: 20,
        },
        burger: {
            carbohydrate: 5,
            fat: 7,
            flavour: 3,
        },
        eggs: {
            protein: 5,
            fat: 1,
            flavour: 1
        },
        turkey: {
            protein: 10,
            carbohydrate: 10,
            fat: 10,
            flavour: 10,
        }
    }
    let commands = {
        restock,
        prepare,
        report
    }
    function manager(line) {
        let [command, param, quantity] = line.split(' ');
        return commands[command](param, quantity);

    }
    function restock(ingredient, quantity) {
        ingredients[ingredient] += Number(quantity);
        return 'Success';
    }
    function prepare(product, quantity) {
        let objOfProduct = Object.entries(recipe[product])
        for (const [ingredient, qnt] of objOfProduct) {
            let needed = Number(qnt) * Number(quantity);

            if (ingredients[ingredient] < needed) {
                return `Error: not enough ${ingredient} in stock`;
            }
            
        }
       
        for (const [ingredient, qnt] of objOfProduct) {
            ingredients[ingredient] -= Number(qnt) * Number(quantity);
        }
        return 'Success';

    }
    function report() {
        let result = [];
        for (const [ingredient, quantity] of Object.entries(ingredients)) {
            result.push(`${ingredient}=${quantity}`);
        }
        return result.join(' ');
    }
    return manager
}
let manager = solution();
console.log(manager("prepare turkey 1"));
console.log(manager("restock protein 10"));
console.log(manager("prepare turkey 1"));
console.log(manager("restock carbohydrate 10"));
console.log(manager("prepare turkey 1"));
console.log(manager("restock fat 10"));
console.log(manager("prepare turkey 1"));
console.log(manager("restock flavour 10"));
console.log(manager("prepare turkey 1"));
console.log(manager("report")); 