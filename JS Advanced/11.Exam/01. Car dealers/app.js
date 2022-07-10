window.addEventListener("load", solve);

function solve() {
  let makeInput = document.getElementById('make');
  let modelInput = document.getElementById('model');
  let yearInput = document.getElementById('year');
  let fuelInput = document.getElementById('fuel');
  let costInput = document.getElementById('original-cost');
  let priceInput = document.getElementById('selling-price');
  let btnPublish = document.getElementById('publish');

  btnPublish.addEventListener('click', publish);
  let profit = 0;
  function publish(e) {
    e.preventDefault();

    make = makeInput.value;
    model = modelInput.value;
    year = yearInput.value;
    fuel = fuelInput.value;
    cost = Number(costInput.value);
    price = Number(priceInput.value);

    if (make === '' || model === '' || year === '' || fuel === '' || cost === '' || price === '' || cost > price) {
      return;
    }

    let tBody = document.getElementById('table-body');
    let tr = document.createElement('tr');
    tr.className = 'row';
    let td1 = document.createElement('td');
    td1.textContent = make;
    let td2 = document.createElement('td');
    td2.textContent = model;
    let td3 = document.createElement('td');
    td3.textContent = year;
    let td4 = document.createElement('td');
    td4.textContent = fuel;
    let td5 = document.createElement('td');
    td5.textContent = cost;
    let td6 = document.createElement('td');
    td6.textContent = price;

    tBody.appendChild(tr);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    tr.appendChild(td6);

    let td7 = document.createElement('td');
    let btnEdit = document.createElement('button');
    btnEdit.className = 'action-btn edit';
    btnEdit.textContent = 'Edit';
    let btnSell = document.createElement('button');
    btnSell.className = 'action-btn sell'
    btnSell.textContent = 'Sell';
    tr.appendChild(td7);
    td7.appendChild(btnEdit);
    td7.appendChild(btnSell);

    makeInput.value = '';
    modelInput.value = '';
    yearInput.value = '';
    fuelInput.value = '';
    costInput.value = '';
    priceInput.value = '';

    btnEdit.addEventListener('click', edit);

    function edit() {
      makeInput.value = make;
      modelInput.value = model;
      yearInput.value = year;
      fuelInput.value = fuel;
      costInput.value = cost;
      priceInput.value = price;
      tBody.removeChild(tr);
    }

    btnSell.addEventListener('click', sell);
    let ul = document.getElementById('cars-list');

    function sell() {
      tBody.removeChild(tr);
      let mm = td1.textContent + ' ' + td2.textContent;
      let priceDifference = Number(td6.textContent) - Number(td5.textContent);
      let li = document.createElement('li');
      li.className = 'each-list';
      let span1 = document.createElement('span');
      let span2 = document.createElement('span');
      let span3 = document.createElement('span');
      span1.textContent = mm;
      span2.textContent = td3.textContent;
      span3.textContent = priceDifference;

      ul.appendChild(li);
      li.appendChild(span1);
      li.appendChild(span2);
      li.appendChild(span3);

      profit += priceDifference;
      let profitMade = document.getElementById('profit');
      profitMade.textContent = profit.toFixed(2);

    }
  }
}
