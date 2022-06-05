function generateReport() {
    let input = [...document.querySelectorAll('thead tr th input')];
    let titles = [...document.querySelectorAll('thead tr th')];
    let text = [...document.querySelectorAll('tbody tr')];
    let result = [];
    for (const tableRow of text) {
        let row = tableRow.children;
        let obj = {};
        for (let i = 0; i < row.length; i++) {
            let data = row[i].textContent;
            let title = titles[i].textContent.toLowerCase().trim();
            if (input[i].checked) {
                obj[title]= data;
            }
        }
        result.push(obj);
    }
    document.getElementById('output').value = JSON.stringify(result);
}
// function generateReport() {
//     let cbs = document.querySelectorAll("thead tr th input");
//     let colPos = [];
//     for (let i = 0; i < cbs.length; i ++) {
//         if (cbs[i].checked) {
//             colPos.push(i);
//         }
//     } 
//     let finalResult = [];
//     let data = document.querySelectorAll("tbody tr");
//     for (let j = 0; j < data.length; j ++) {
//         let currRow = data[j].children;
//         let currItems = {};
//         for (let k = 0; k < currRow.length; k ++) {
//             if (colPos.includes(k)) {
//                 let label = cbs[k].name;
//                 currItems[label] = currRow[k].textContent;
//             }
//         }
//         finalResult.push(currItems);
//     }
//     let jsonFinal = JSON.stringify(finalResult);
//     let target = document.getElementById('output');
//     target.value = jsonFinal;
// }
