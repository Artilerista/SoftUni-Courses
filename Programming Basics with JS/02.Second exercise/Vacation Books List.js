function vacantionBookList (input){
    let numberpages = Number(input[0]);
    let pagesforonehour = Number(input[1]);
    let neededdaysforreadthebook = Number(input[2]);
    let hoursforreadthebook = numberpages / pagesforonehour;
    let hoursforreadforday = hoursforreadthebook / neededdaysforreadthebook;
    console.log(hoursforreadforday);
    
}
vacantionBookList(['212','20','2'])