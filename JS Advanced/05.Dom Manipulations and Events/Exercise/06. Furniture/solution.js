function solve() {
  let buttons = Array.from(document.querySelectorAll('button'));
  let generateBut = buttons[0];
  let buyBut = buttons[1];
  generateBut.addEventListener('click', generate);
  buyBut.addEventListener('click', buy);
  function generate() {
    JSON.parse(document.querySelector('textarea').value).forEach(obj => {
      let tr = document.createElement('tr');
      let td1 = document.createElement('td');
      let img = document.createElement('img');
      img.src = obj.img;
      td1.appendChild(img);
      tr.appendChild(td1);
      let td2 = document.createElement('td');
      let p1 = document.createElement('p');
      p1.textContent = obj.name;
      td2.appendChild(p1);
      tr.appendChild(td2);
      let td3 = document.createElement('td');
      let p2 = document.createElement('p');
      p2.textContent = Number(obj.price);
      td3.appendChild(p2);
      tr.appendChild(td3);
      let td4 = document.createElement('td');
      let p3 = document.createElement('p');
      p3.textContent = Number(obj.decFactor);
      td4.appendChild(p3);
      tr.appendChild(td4);
      let td5 = document.createElement('td');
      let input = document.createElement('input');
      input.type = 'checkbox';
      td5.appendChild(input);
      tr.appendChild(td5);
      document.querySelector('tbody').appendChild(tr);
    });
  }
  function buy() {
    let inputs = Array.from(document.querySelectorAll('input')).filter(i => i.checked);
    let furniture = [];
    let price = 0;
    let decFactor = 0;
    for (const input of inputs) {
      let tr = input.parentElement.parentElement;
      let p = [...tr.querySelectorAll('p')];
      furniture.push(p[0].textContent);
      price += Number(p[1].textContent);
      decFactor += Number(p[2].textContent);
    }
    let text = [...document.querySelectorAll('textarea')]
    let result = text[1];
    result.value += `Bought furniture: ${furniture.join(', ')}\n`;
    result.value += `Total price: ${price.toFixed(2)}\n`;
    result.value += `Average decoration factor: ${decFactor / inputs.length}`;
  }
}