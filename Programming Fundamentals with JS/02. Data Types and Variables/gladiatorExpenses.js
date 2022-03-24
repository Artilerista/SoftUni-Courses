function gladiatorExpenses(counter, helmet, sword, shield, armor) {
    let sum = 0;
    for (let i = 1; i <= counter; i++) {
        if (i % 2 === 0) {
            sum += helmet;
        }
        if (i % 3 === 0) {
            sum+=sword;
        }
        if (i % 2 === 0 && i % 3 === 0){
            sum+=shield;
        }
        if (i % 12 === 0){
            sum+=armor;
        }
    }
    console.log(`Gladiator expenses: ${sum.toFixed(2)} aureus`);
}
gladiatorExpenses(7, 2, 3, 4, 5)