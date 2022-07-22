async function getRecipe() {
    let response = await fetch('http://localhost:3030/jsonstore/cookbook/recipes');
    let data = await response.json();
    let main = document.querySelector('main');

    for (const [key, obj] of Object.entries(data)) {

        let preview = document.createElement('article');
        preview.className = 'preview';

        let divTitle = document.createElement('div');
        divTitle.className = 'title';

        let h2Title = document.createElement('h2');
        h2Title.textContent = obj.name;

        let divImg = document.createElement('div');
        divImg.className = 'small';

        let img = document.createElement('img');
        img.src = obj.img;

        preview.appendChild(divTitle);
        divTitle.appendChild(h2Title);
        preview.appendChild(divImg);
        divImg.appendChild(img);
        main.appendChild(preview);

        preview.addEventListener('click', () => onClick(obj._id, preview));
    }

    async function onClick(id, preview) {
        let response = await fetch('http://localhost:3030/jsonstore/cookbook/details/' + id);
        let data = await response.json();

        let article = document.createElement('article');

        let h2 = document.createElement('h2');
        h2.textContent = data.name;
        article.appendChild(h2);

        let divBand = document.createElement('div');
        divBand.className = 'band';
        article.appendChild(divBand);

        let divThumb = document.createElement('div');
        divThumb.className = 'thumb';
        divBand.appendChild(divThumb);

        let img = document.createElement('img');
        img.src = data.img;
        divThumb.appendChild(img);

        let divIngredients = document.createElement('div');
        divIngredients.className = 'ingredients';
        divBand.appendChild(divIngredients);

        let h3 = document.createElement('h3');
        h3.textContent = 'Ingredients:';
        divIngredients.appendChild(h3);

        let ul = document.createElement('ul');
        divIngredients.appendChild(ul);

        for (const ingredient of data.ingredients) {
            let li = document.createElement('li');
            li.textContent = ingredient;
            ul.appendChild(li);
        }

        let divDescription = document.createElement('div');
        divDescription.className = 'description';
        article.appendChild(divDescription)


        let h3P = document.createElement('h3');
        h3P.textContent = 'Preparation:';
        divDescription.appendChild(h3P);

        for (const prep of data.steps) {
            let p = document.createElement('p');
            p.textContent = prep;
            divDescription.appendChild(p);
        }

        main.replaceChild(article, preview);
    }
}
getRecipe()