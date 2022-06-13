function solve() {
    let task = document.getElementById('task');
    let description = document.getElementById('description');
    let date = document.getElementById('date');
    let btnAdd = document.getElementById('add');

    btnAdd.addEventListener('click', add);

    let sectons = Array.from(document.querySelectorAll('section'));
    sectons.shift();

    let orangeSection = sectons.shift().children[1];
    let yellowSection = sectons.shift().children[1];
    let greenSection = sectons.shift().children[1];


    function add(event) {
        event.preventDefault();
        let article = document.createElement('article');
        let h3 = document.createElement('h3');
        h3.textContent = task.value
        article.appendChild(h3);
        let p1 = document.createElement('p');
        p1.textContent = `Description: ${description.value}`;
        article.appendChild(p1);
        let p2 = document.createElement('p');
        p2.textContent = `Due Date: ${date.value}`;
        article.appendChild(p2);
        let div = document.createElement('div');
        div.className = "flex";
        let btnStart = document.createElement('button');
        btnStart.textContent = 'Start';
        btnStart.className = 'green';
        let btnDelete = document.createElement('button');
        btnDelete.textContent = 'Delete';
        btnDelete.className = 'red';
        let btnFinish = document.createElement('button');
        btnFinish.textContent = 'Finish';
        btnFinish.className = 'orange';
        div.appendChild(btnStart);
        div.appendChild(btnDelete);
        article.appendChild(div);
        orangeSection.appendChild(article);

        task.value = '';
        description.value = '';
        date.value = '';

        btnStart.addEventListener('click', start);
        btnDelete.addEventListener('click', deleted);
        btnFinish.addEventListener('click', finished);
        function start() {
            yellowSection.appendChild(article);
            btnStart.remove();
            div.appendChild(btnFinish);
        }
        function deleted () {
            article.remove();
        }
        function finished () {
            greenSection.appendChild(article);
            div.remove()
        }
    }

    
}