async function loadCommits() {
    let username = document.getElementById('username');
    let repo = document.getElementById('repo');
    let url = `https://api.github.com/repos/${username.value}/${repo.value}/commits`;
    let ul = document.getElementById('commits');
    try {
        let response = await fetch(url);
        if (response.status !== 200) {
            throw new Error(`Error: ${response.status}`);
        }
        let data = await response.json();
        data.forEach(obj => {
            let li = document.createElement("li");
            li.textContent = `${obj.commit.author.name}: ${obj.commit.message}`;
            ul.appendChild(li);
        });
    }
    catch (err) {
        let li = document.createElement("li");
        li.textContent = err.message;
        ul.appendChild(li);
    }

}