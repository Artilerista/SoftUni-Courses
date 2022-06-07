function solve() {
   let object = {};
   let button = [...document.querySelectorAll('button')];
   let names = [...document.querySelectorAll('.product-title, .product-line-price')];
   let sum = 0;
   let list = [];

   for (let i = 0; i < names.length; i += 2) {
      let name = names[i].textContent;
      let price = Number(names[i + 1].textContent);
      object[name] = price;
   }

   button.forEach(b => b.addEventListener('click', add));

   function add(event) {

      if (event.currentTarget.textContent.trim() === 'Add') {
         let product = event.currentTarget.parentElement.parentElement;
         let productName = product.querySelector('.product-title').textContent;
         sum += object[productName];
         if (list.includes(productName) === false) {
            list.push(productName);
         }
         document.querySelector('textarea').textContent += `Added ${productName} for ${object[productName].toFixed(2)} to the cart.\n`;
      } else if (event.currentTarget.textContent.trim() === 'Checkout') {
         document.querySelector('textarea').textContent += `You bought ${list.join(', ')} for ${sum.toFixed(2)}.`
         button.forEach(b => b.removeEventListener('click', add));
      }
   }

}