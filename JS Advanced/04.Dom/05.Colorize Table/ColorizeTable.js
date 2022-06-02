function colorize() {
    const rows = Array.from(document.querySelectorAll('tr'));
    for (let i = 1; i < rows.length; i += 2) {
        const row = rows[i];
        row.style.background = 'Teal';
    }
}