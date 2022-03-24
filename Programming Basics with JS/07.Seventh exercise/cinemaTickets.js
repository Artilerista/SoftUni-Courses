function cinemaTickets(input) {
    let index = 0;
    let commnad = input[index];
    index++;
    let totalTickets = 0;
    let standardTicket = 0;
    let kidTicket = 0;
    let studentTicket = 0;
    while (commnad !== 'Finish') {
        let name = commnad;
        let freeSpace = Number(input[index]);
        index++;
        let currentFilmTickets = 0;
        let currentCommand = input[index];
        index++
        while (currentCommand !== 'End') {
            let ticket = currentCommand;
            currentFilmTickets++;
            switch (ticket) {
                case 'standard': standardTicket++; break;
                case 'kid': kidTicket++; break;
                case 'student': studentTicket++; break;
            }
            if (currentFilmTickets >= freeSpace) {
                break;
            }
            currentCommand = input[index];
            index++;
        }
        totalTickets+= currentFilmTickets;
        let currentFilmP = currentFilmTickets / freeSpace * 100;
        console.log(`${name} - ${currentFilmP.toFixed(2)}% full.`);
        commnad = input[index];
        index++;
    }
    let standardP = standardTicket / totalTickets * 100;
    let kidP = kidTicket / totalTickets * 100;
    let studentP = studentTicket / totalTickets * 100;
    console.log(`Total tickets: ${totalTickets}`);
    console.log(`${studentP.toFixed(2)}% student tickets.`);
    console.log(`${standardP.toFixed(2)}% standard tickets.`);
    console.log(`${kidP.toFixed(2)}% kids tickets.`);
}
cinemaTickets(["Taxi",
    "10",
    "standard",
    "kid",
    "student",
    "student",
    "standard",
    "standard",
    "End",
    "Scary Movie",
    "6",
    "student",
    "student",
    "student",
    "student",
    "student",
    "student",
    "Finish"])
