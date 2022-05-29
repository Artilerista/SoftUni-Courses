function calorieObject(array) {
    const result = {};
    for (let i = 0; i < array.length; i += 2) {
      const product = array[i];
      const number = Number(array[i + 1]);
      result[product] = number;  
    }
    console.log(result)
}
calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])