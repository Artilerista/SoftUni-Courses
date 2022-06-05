function search() {
   let towns = Array.from(document.querySelectorAll('#towns li'));
   let input = document.getElementById('searchText').value;
   let result = document.getElementById('result');
   let counter = 0;
   for (const town of towns) {
      if (town.textContent.includes(input) && input.length !== 0) {
         counter++;
         town.style.fontWeight = 'bold';
         town.style.textDecoration = 'underline';
      } else {
         town.style.fontWeight = '';
         town.style.textDecoration = '';
      }
   }
   return result.textContent = `${counter} matches found`;
}

