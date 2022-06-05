function solve() {
  const input = document.getElementById('input').value;
  const arrInput = input.split('.').filter(x => x.length !== 0);
  const result = document.getElementById('output');
  while (arrInput.length > 0) {
    let sentences = arrInput.splice(0, 3).join('. ') + '.';
    let p = document.createElement('p');
    p.textContent = sentences;
    result.appendChild(p);
  }
}