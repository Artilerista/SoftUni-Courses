function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      const rows = Array.from(document.querySelectorAll('tbody tr'));
      let input = document.getElementById('searchField');
      for (const row of rows) {
         if (row.textContent.includes(input.value) && input.value.length !== 0) {
            row.className = 'select';
         } else {
            row.className = '';
         }
      }
      input.value = '';
   }
}