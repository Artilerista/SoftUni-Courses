function solve() {
  const text = document.getElementById('text').value;
  const command = document.getElementById('naming-convention').value;
  const array = text.split(' ');
  const result = [];
  for (let i = 0; i < array.length; i++) {
    let word = array[i].toLowerCase();
    if (command === 'Camel Case') {
      if (i != 0) {
        word = word[0].toUpperCase() + word.slice(1);
      } 
    } else if (command === 'Pascal Case') {
      word = word[0].toUpperCase() + word.slice(1);
    } else {
      return document.getElementById('result').textContent = ('Error!');
    }
    result.push(word);
  }
  document.getElementById('result').textContent = result.join('');
}