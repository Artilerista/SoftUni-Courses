function fromJSONToHTMLTable(jSON) {
    const array = JSON.parse(jSON);
    const table = ['<table>'];
    const objectNames = array[0];
    function makeKeyRow(objectNames) {
        const keys = [];
        for (const key in objectNames) {
            keys.push(`<th>${escapeHTML(key)}</th>`);
        }
        return ('<tr>' + keys.join('') + '</tr>');
    }
    table.push(makeKeyRow(objectNames));

    function makeValueRow(object) {
        const values = [];
        Object.values(object).forEach(value => values.push(`<td>${escapeHTML(value)}</td>`));
        return ("<tr>" + values.join('') + "</tr>");
    }
    array.forEach(object => table.push(makeValueRow(object)));
    table.push('</table>');
    function escapeHTML(value) {
        return value
            .toString()
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }
    return table.join('\r\n');
}

console.log(fromJSONToHTMLTable(`[{"Name":"Pesho",
"Score":4,
" Grade":8},
{"Name":"Gosho<",
"Score":5,
" Grade":8},
{"Name":"Angel",
"Score":5.50,
" Grade":10}]`
));