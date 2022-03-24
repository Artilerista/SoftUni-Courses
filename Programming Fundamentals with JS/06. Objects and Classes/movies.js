function movies(array) {
    let arr = [];
    for (let element of array) {
        if (element.includes('addMovie')) {
            let token = element.split('addMovie ');
            let name = token[1]
            arr.push({name: name,});
        } else if (element.includes('directedBy')) {
            let token = element.split(' directedBy ');
            let name = token[0];
            let director = token[1];
            if (arr.find(list => list.name === name)) {
               let movie = arr.find(list => list.name === name)
                movie.director = director;
            }
        } else if (element.includes('onDate')) {
            let token = element.split(' onDate ');
            let name = token[0];
            let date = token[1];
            if(arr.find(x => x.name === name)){
                let movie = arr.find(x => x.name === name);
                movie.date = date;
            }
        }
    }
    for (let element of arr) {
        if(element.name !== undefined && element.date !== undefined && element.director !== undefined){
            console.log(JSON.stringify(element));
        }
        
    }

}
movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
]
)