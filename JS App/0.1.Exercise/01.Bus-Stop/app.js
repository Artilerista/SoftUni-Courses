async function getInfo() {
    let url = 'http://localhost:3030/jsonstore/bus/businfo/';
    let input = document.getElementById('stopId');
    let stopName = document.getElementById('stopName');
    let buses = document.getElementById('buses');
    
    buses.innerHTML = "";

    try {
        let response = await fetch(url + input.value);
        console.log(response)
        if (response.status !== 200 || input.value === '') {
            throw new Error('Error');
        }
        let data = await response.json();
        stopName.textContent = data.name;
        for (const [buss, time] of Object.entries(data.buses)) {
            let li = document.createElement('li');
            li.textContent = `Bus ${buss} arrives in ${time} minutes`;
            buses.appendChild(li);
        }
    }
    catch (err) {
        stopName.textContent = err.message;
    }

}