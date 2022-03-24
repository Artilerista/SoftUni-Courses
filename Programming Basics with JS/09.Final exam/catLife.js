function catLife(input) {
    let specias = input[0];
    let gender = input[1];
    let humanMounths = 0;
    let catMounths = 0;
    let isValid = true;
    switch (specias) {
        case "British Shorthair":
            if (gender === "m") {
                humanMounths = 13 * 12;
                catMounths = humanMounths / 6;
            } else if (gender === "f") {
                humanMounths = 14 * 12;
                catMounths = humanMounths / 6;
            }
            break;
        case "Siamese":
            if (gender === "m") {
                humanMounths = 15 * 12;
                catMounths = humanMounths / 6;
            } else if (gender === "f") {
                humanMounths = 16 * 12;
                catMounths = humanMounths / 6;
            }
            break;
        case "Persian":
            if (gender === "m") {
                humanMounths = 14 * 12;
                catMounths = humanMounths / 6;
            } else if (gender === "f") {
                humanMounths = 15 * 12;
                catMounths = humanMounths / 6;
            }
            break;
        case "Ragdoll":
            if (gender === "m") {
                humanMounths = 16 * 12;
                catMounths = humanMounths / 6;
            } else if (gender === "f") {
                humanMounths = 17 * 12;
                catMounths = humanMounths / 6;
            }
            break;
        case "American Shorthair":
            if (gender === "m") {
                humanMounths = 12 * 12;
                catMounths = humanMounths / 6;
            } else if (gender === "f") {
                humanMounths = 13 * 12;
                catMounths = humanMounths / 6;
            }
            break;
        case "Siberian":
            if (gender === "m") {
                humanMounths = 11 * 12;
                catMounths = humanMounths / 6;
            } else if (gender === "f") {
                humanMounths = 12 * 12;
                catMounths = humanMounths / 6;
            }
            break;
        default: console.log(`${specias} is invalid cat!`);
            isValid = false;
            break;
    }
    if (isValid) {
        console.log(`${Math.floor(catMounths)} cat months`);
    }
}
catLife(["Tom",
    "m"])

