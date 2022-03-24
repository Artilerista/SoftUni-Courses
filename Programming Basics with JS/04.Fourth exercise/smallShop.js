function smallShop(input) {
    let product = input[0];
    let city = input[1];
    let num = Number(input[2]);
    let productsum = 0;
    if (city === 'Sofia') {
        switch (product) {
            case 'coffee': productsum = num * 0.50; break;
            case 'water': productsum = num * 0.80; break;
            case 'beer': productsum = num * 1.20; break;
            case 'sweets': productsum = num * 1.45; break;
            case 'peanuts': productsum = num * 1.60; break;
        }
    }


    if (city === 'Plovdiv') {
        switch (product) {
            case 'coffee': productsum = num * 0.40; break;
            case 'water': productsum = num * 0.70; break;
            case 'beer': productsum = num * 1.15; break;
            case 'sweets': productsum = num * 1.30; break;
            case 'peanuts': productsum = num * 1.50; break;
        }

    }
    if (city === 'Varna') {
        switch (product) {
            case 'coffee': productsum = num * 0.45; break;
            case 'water': productsum = num * 0.70; break;
            case 'beer': productsum = num * 1.10; break;
            case 'sweets': productsum = num * 1.35; break;
            case 'peanuts': productsum = num * 1.55; break;
        }

    }
    console.log(productsum);
}
smallShop(["peanuts",
    "Plovdiv",
    "1"])
