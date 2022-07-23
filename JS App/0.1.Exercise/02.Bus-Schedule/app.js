function solve() {
    let btnDepart = document.getElementById('depart');
    let btnArrive = document.getElementById('arrive');
    let url = 'http://localhost:3030/jsonstore/bus/schedule/';
    let stop = {
        next: 'depot'
    };
    let stopInfo = document.querySelector('.info');
    async function depart() {
        try {
            let response = await fetch(url + stop.next);
            if (response.status !== 200) {
                throw new Error('Error');
            }
            let data = await response.json();
            stopInfo.textContent = `Next stop ${data.name}`;
            stop.next = data.next
            stop.name = data.name
            btnArrive.disabled = false;
            btnDepart.disabled = true;
        }
        catch (err) {
            btnArrive.disabled = true;
            btnDepart.disabled = true;
            stopInfo.textContent = err.message;
        }
    }

    function arrive() {
        btnArrive.disabled = true;
        btnDepart.disabled = false;
        stopInfo.textContent = `Arriving at ${stop.name}`;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();