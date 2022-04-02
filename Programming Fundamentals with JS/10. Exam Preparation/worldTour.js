function worldTour(array) {
    let str = array.shift();
    while(array[0] !== 'Travel'){
        let tokens = array.shift().split(':');
        let command = tokens[0];
        let p1 = tokens[1];
        let p2 = tokens[2];
        if(command === 'Add Stop'){
            let index = Number(p1);
            if(index >= 0 && index < str.length){
                let firstHalf = str.substring(0,index);
                let secondHalf = str.substring(index);
                str = firstHalf + p2 + secondHalf;
            }
            console.log(str);
        } else if (command === 'Remove Stop'){
            let startIndex = Number(p1);
            let endIndex = Number(p2);
            if(startIndex >= 0 && startIndex < str.length && endIndex >= 0 && endIndex < str.length){
                let firstHalf = str.substring(0,startIndex);
                let secondHalf = str.substring(endIndex + 1);
                str = firstHalf + secondHalf;
            }
            console.log(str);
        } else if (command === 'Switch'){
            let index = str.indexOf(p1);
            if(index !== -1){
                str = str.split(p1).join(p2);
            }
            console.log(str);
        }
    }
    console.log(`Ready for world tour! Planned stops: ${str}`);
}
worldTour((["Hawai::Cyprys-Greece",
    "Add Stop:7:Rome",
    "Remove Stop:11:16",
    "Switch:Hawai:Bulgaria",
    "Travel"])
)