class VegetableStore {
  constructor(owner, location) {
    this.owner = owner;
    this.location = location;
    this.availableProducts = [];
  }

  loadingVegetables(vegetables) {
    let result = [];
    for (const veg of vegetables) {
      let [type, quantity, price] = veg.split(' ');
      quantity = Number(quantity);
      price = Number(price)
      let vegetable = this.availableProducts.find(v => v.type === type);
      if (vegetable === undefined) {
        result.push(type);
        this.availableProducts.push({
          type,
          quantity,
          price
        });
      } else {
        vegetable.quantity += quantity;
        if (vegetable.price < price) {
          vegetable.price = price;
        }
      }
    }
    return `Successfully added ${result.join(', ')}`;
  }

  buyingVegetables(selectedProducts) {
    let totalPrice = 0;
    for (const line of selectedProducts) {
      let [type, quantity] = line.split(' ');
      quantity = +quantity;
      let vegetable = this.availableProducts.find(v => v.type === type);
      if (vegetable === undefined) {
        throw new Error(`${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`);
      }
      if (vegetable.quantity < quantity) {
        throw new Error(`The quantity ${quantity} for the vegetable ${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`);
      }
      totalPrice += vegetable.price * quantity;
      vegetable.quantity -= quantity;
    }
    return `Great choice! You must pay the following amount $${totalPrice.toFixed(2)}.`

  }
  rottingVegetable(type, quantity) {
    quantity = +quantity;
    let vegetable = this.availableProducts.find(v => v.type === type);
    if (vegetable === undefined) {
      throw new Error(`${type} is not available in the store.`);
    }
    if (vegetable.quantity < quantity) {
      vegetable.quantity = 0;
      return `The entire quantity of the ${type} has been removed.`
    } else {
      vegetable.quantity -= quantity;
      return `Some quantity of the ${type} has been removed.`
    }
  }

  revision() {
    let result = [];
    result.push('Available vegetables:');
    this.availableProducts.sort((a, b) => a.price - b.price);
    for (const veg of this.availableProducts) {
      result.push(`${veg.type}-${veg.quantity}-$${veg.price}`);
    }
    result.push(`The owner of the store is ${this.owner}, and the location is ${this.location}.`);
    return result.join('\n')
  }
}
let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
console.log(vegStore.rottingVegetable("Okra", 1));
console.log(vegStore.rottingVegetable("Okra", 2.5));
console.log(vegStore.buyingVegetables(["Beans 8", "Celery 1.5"]));
console.log(vegStore.revision());

