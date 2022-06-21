function tickets(array, criteria) {
    let list = [];
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }
    for (const line of array) {
        let [destination, price, status] = line.split('|');
        price = Number(price);
        list.push(new Ticket(destination, price, status));
    }
    return list.sort((a, b) => {
        if(criteria === 'destination'){
            return a.destination.localeCompare(b.destination);
        } else if (criteria === 'price'){
            return a.price - b.price;
        } else if (criteria === 'status') {
            return a.status.localeCompare(b.status);
        }
    })
    

}
console.log(tickets(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'destination'
))