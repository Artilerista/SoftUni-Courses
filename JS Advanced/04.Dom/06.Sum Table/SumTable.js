function sumTable() {
    const talbe = Array.from(document.querySelectorAll('tr')).slice(1,-1);
    let result = 0;
    for (const row of talbe) {
        result += Number(row.lastElementChild.textContent);
    }
    document.getElementById('sum').textContent = result;
}