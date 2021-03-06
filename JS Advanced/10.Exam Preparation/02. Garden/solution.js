class Garden {
  constructor(spaceAvailable) {
    this.spaceAvailable = spaceAvailable;
    this.plants = [];
    this.storage = [];
  }
  addPlant(plantName, spaceRequired) {
    if (spaceRequired > this.spaceAvailable) {
      throw new Error('Not enough space in the garden.');
    }
    this.plants.push({
      plantName,
      spaceRequired,
      ripe: false,
      quantity: 0
    });
    this.spaceAvailable -= spaceRequired;
    return `The ${plantName} has been successfully planted in the garden.`
  }

  ripenPlant(plantName, quantity) {
    if (quantity <= 0) {
      throw new Error('The quantity cannot be zero or negative.');
    }
    let plant = this.plants.find(p => p.plantName === plantName);
    if (plant === undefined) {
      throw new Error(`There is no ${plantName} in the garden.`);
    }
    if (plant.ripe === true) {
      throw new Error(`The ${plantName} is already ripe.`);
    }
    plant.ripe = true;
    plant.quantity += quantity
    if (quantity === 1) {
      return `${quantity} ${plantName} has successfully ripened.`
    } else {
      return `${quantity} ${plantName}s have successfully ripened.`
    }
  }
  harvestPlant(plantName) {
    let plant = this.plants.find(p => p.plantName === plantName);
    if (plant === undefined) {
      throw new Error(`There is no ${plantName} in the garden.`);
    }
    if (plant.ripe === false) {
      throw new Error(`The ${plantName} cannot be harvested before it is ripe.`);
    }
    let index = this.plants.indexOf(plant);
    this.plants.splice(index, 1);
    let quantity = plant.quantity;
    this.storage.push({
      plantName,
      quantity
    });
    this.spaceAvailable += plant.spaceRequired;
    return `The ${plantName} has been successfully harvested.`;
  }
  generateReport() {
    let result = [];
    result.push(`The garden has ${this.spaceAvailable} free space left.`);
    this.plants.sort((a, b) => a.plantName.localeCompare(b.plantName));
    let names = [];
    for (const obj of this.plants) {
      names.push(obj.plantName);
    }
    let message1 = 'Plants in the garden: ' + names.join(', ')
    result.push(message1);
    let storage = [];
    if(this.storage.length === 0) {
      result.push('Plants in storage: The storage is empty.');
    } else {
      for (const obj of this.storage) {
        storage.push(`${obj.plantName} (${obj.quantity})`);
      }
    }
    let message2 = 'Plants in storage: ' + storage.join(', ')
    result.push(message2);
    return result.join('\n');
  }
}
const myGarden = new Garden(250)
console.log(myGarden.addPlant('apple', 20));
console.log(myGarden.addPlant('orange', 200));
console.log(myGarden.addPlant('raspberry', 10));
console.log(myGarden.ripenPlant('apple', 10));
console.log(myGarden.ripenPlant('orange', 1));
console.log(myGarden.harvestPlant('orange'));
console.log(myGarden.generateReport());





