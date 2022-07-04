window.addEventListener("load", solve);

function solve() {
  let titleInput = document.getElementById('post-title');
  let postInput = document.getElementById('post-category');
  let contentInput = document.getElementById('post-content');
  let btnPublish = document.getElementById('publish-btn');
  btnPublish.addEventListener('click', published);

  function published(e) {
    e.preventDefault();
    let publishedUl = document.getElementById('review-list');
    let title = titleInput.value;
    let post = postInput.value;
    let content = contentInput.value;
    if (title === '' || post === '' || content === '') {
      return;
    }

    let li = document.createElement('li');
    li.className = 'rpost';

    let article = document.createElement('article');

    let h4 = document.createElement('h4');
    let pPost = document.createElement('p');
    let pContent = document.createElement('p')

    h4.textContent = title;
    pPost.textContent = 'Category: ' + post;
    pContent.textContent = 'Content: ' + content;

    article.appendChild(h4);
    article.appendChild(pPost);
    article.appendChild(pContent);
    li.appendChild(article);

    let btnEdit = document.createElement('button');
    btnEdit.className = 'action-btn edit'
    btnEdit.textContent = 'Edit';
    let btnApprove = document.createElement('button');
    btnApprove.className = 'action-btn approve';
    btnApprove.textContent = 'Approve';
    li.appendChild(btnApprove);
    li.appendChild(btnEdit);
    publishedUl.appendChild(li);

    titleInput.value = '';
    postInput.value = '';
    contentInput.value = '';

    btnEdit.addEventListener('click', edit);

    function edit(e) {
      titleInput.value = title;
      postInput.value = post;
      contentInput.value = content;
      li.remove();
    }

    btnApprove.addEventListener('click', approve);


    let ul = document.getElementById('published-list');
    function approve() {
      ul.appendChild(li);
      li.removeChild(btnEdit);
      li.removeChild(btnApprove);
    }

    let clearedBtn = document.getElementById('clear-btn');
    clearedBtn.addEventListener('click', cleared);

    function cleared() {
      ul.removeChild(li);
    }

  }
}
