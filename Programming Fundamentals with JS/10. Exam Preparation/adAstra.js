function adAstra(input) {
    let text = input[0];
    let pattern = /([|#])(?<foodName>[A-Za-z\s]+)\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d{1,5})\1/g;
    let totalCalories = 0;
    let caloriesForDay = 2000;
    let match = pattern.exec(text);
    let food = [];
    while(match !== null){
        totalCalories+= Number(match.groups.calories);
        food.push(`Item: ${match.groups.foodName}, Best before: ${match.groups.date}, Nutrition: ${match.groups.calories}`);
        match = pattern.exec(text);
    }
    console.log(`You have food to last you for: ${Math.floor(totalCalories/caloriesForDay)} days!`);
    console.log(food.join('\n'))
}
adAstra([
    '$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|'
])
