function create(words) {
   let father = document.getElementById('content');
   for (const word of words) {
      let div = document.createElement('div');
      let p = document.createElement('p');
      p.textContent = word;
      p.style.display = 'none';
      div.appendChild(p);
      father.appendChild(div);
      div.addEventListener('click', onClick);
      function onClick(event) {
         let par = event.target.children[0];
         par.style.display = 'block';
      }
   }
}