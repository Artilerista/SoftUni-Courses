function loadRepos() {
   let url = 'https://api.github.com/users/testnakov/repos';
   let httpRequest = new XMLHttpRequest();
   httpRequest.addEventListener('readystatechange', onClick);
   httpRequest.open('GET', url);
   httpRequest.send();
   function onClick() {
      if (httpRequest.readyState === 4 && httpRequest.status === 200) {
         document.getElementById('res').textContent = JSON.parse(JSON.stringify(httpRequest.responseText));
      }
   }
}