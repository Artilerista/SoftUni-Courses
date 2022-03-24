function login(input) {
    let username = input[0];
    let counter = 0;
    for (let index = 1; index < input.length; index++) {
        let password = input[index];
        password = password.split('');
        password = password.reverse();
        password = password.join('');
        if (counter === 3 && username !== password) {
            console.log(`User ${username} blocked!`);
            break;
        }
        if (username !== password) {
            console.log('Incorrect password. Try again.');
        } else {
            console.log(`User ${username} logged in.`);
        }
        counter++;
    }

}
login(['Acer', 'login', 'go', 'let me in', 'recA'])
login(['sunny','rainy','cloudy','sunny','not sunny'])