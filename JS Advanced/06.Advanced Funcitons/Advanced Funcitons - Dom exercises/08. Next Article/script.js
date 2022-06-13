function getArticleGenerator(articles) {
    let div = document.getElementById('content');
    function showNext() {
        let sentences = articles.shift();
        if (sentences) {
            let article = document.createElement('article');
            article.textContent = sentences;
            div.appendChild(article);
        }
    }
    return showNext

}
