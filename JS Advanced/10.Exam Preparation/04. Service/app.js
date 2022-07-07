window.addEventListener("load", solve);

function solve() {
  let descriptionInput = document.getElementById('description');
  let clientNameInput = document.getElementById('client-name');
  let clientPhoneInput = document.getElementById('client-phone');
  let productInput = document.getElementById('type-product');
  let btnSend = document.querySelector('#right form button');

  btnSend.addEventListener('click', send);
  function send(e) {
    e.preventDefault();
    let description = descriptionInput.value;
    let clientName = clientNameInput.value;
    let clientPhone = clientPhoneInput.value;
    let product = productInput.value;
    if (description === '' || clientName === '' || clientPhone === '' || product === '') {
      return;
    }

    let receivedSection = document.getElementById('received-orders');
    let div = document.createElement('div');
    div.className = 'container';
    let h2 = document.createElement('h2');
    h2.textContent = 'Product type for repair: ' + product;
    let h3 = document.createElement('h3');
    h3.textContent = 'Client information: ' + clientName + ', ' + clientPhone;
    let h4 = document.createElement('h4');
    h4.textContent = 'Description of the problem: ' + description;

    let btnStart = document.createElement('button');
    btnStart.className = 'start-btn';
    btnStart.textContent = 'Start repair';
    let btnFinish = document.createElement('button');
    btnFinish.className = 'finish-btn';
    btnFinish.textContent = 'Finish repair';
    btnFinish.disabled = true;

    div.appendChild(h2);
    div.appendChild(h3);
    div.appendChild(h4);
    div.appendChild(btnStart);
    div.appendChild(btnFinish);
    receivedSection.appendChild(div);

    descriptionInput.value = '';
    clientNameInput.value = '';
    clientPhoneInput.value = '';
    productInput.value = '';

    btnStart.addEventListener('click', startRepair);

    function startRepair() {
      btnStart.disabled = true;
      btnFinish.disabled = false;
    }
    btnFinish.addEventListener('click', finishRepair);

    let sectionCompleted = document.getElementById('completed-orders');
    function finishRepair() {
      div.removeChild(btnStart);
      div.removeChild(btnFinish);
      sectionCompleted.appendChild(div);
    }
    let btnClear = document.querySelector('#completed-orders button');
    btnClear.addEventListener('click', clear);

    function clear() {
      sectionCompleted.removeChild(div);
    }
  }
}


