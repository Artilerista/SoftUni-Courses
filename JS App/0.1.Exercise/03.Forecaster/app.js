function attachEvents() {
    let button = document.getElementById('submit');
    let location = document.getElementById('location');
    let currentConditions = document.getElementById('current');
    let threeDayForecast = document.getElementById('upcoming');
    let forecastSection = document.getElementById('forecast');

    let weather = {
        'Sunny': '&#x2600',
        'Partly sunny': '&#x26C5',
        'Overcast': '&#x2601',
        'Rain': '&#x2614',
        'Degrees': '&#176'
    }
    button.addEventListener('click', onClick);
    let code = '';

    async function onClick() {
        currentConditions.innerHTML = ''
        threeDayForecast.innerHTML = ''

        try {
            let response = await fetch('http://localhost:3030/jsonstore/forecaster/locations');
            let data = await response.json();
            data.forEach(obj => {
                if (location.value == obj.name) {
                    code = obj.code;
                }
            });

            if (code === '' || response.status !== 200) {
                throw new Error('Error');
            }

        } catch (err) {
            forecastSection.textContent = err.message;
        }
        forecastSection.style.display = 'block';

        let response1 = await fetch('http://localhost:3030/jsonstore/forecaster/today/' + code);
        let data1 = await response1.json();

        let labelDiv = document.createElement('div');
        labelDiv.className = 'label';
        labelDiv.textContent = 'Current conditions';
        currentConditions.appendChild(labelDiv);

        let symbol = data1.forecast.condition;
        let divForeCast = document.createElement('div');
        divForeCast.className = 'forecasts';

        let spanSymbol = document.createElement('span');
        spanSymbol.setAttribute('class', 'condition symbol')
        spanSymbol.innerHTML = weather[symbol];
        let spanCon = document.createElement('span');
        spanSymbol.className = 'condition';
        let spanCity = document.createElement('span');
        spanCity.className = 'forecast-data';
        spanCity.textContent = data1.name;
        let spanDegrees = document.createElement('span');
        spanDegrees.className = 'forecast-data';
        spanDegrees.innerHTML = `${data1.forecast.low}${weather.Degrees}/${data1.forecast.high}${weather.Degrees}`;
        let spanWether = document.createElement('span');
        spanWether.className = 'forecast-data';
        spanWether.textContent = data1.forecast.condition;

        spanCon.appendChild(spanCity);
        spanCon.appendChild(spanDegrees);
        spanCon.appendChild(spanWether);

        divForeCast.appendChild(spanSymbol);
        divForeCast.appendChild(spanCon);

        currentConditions.appendChild(divForeCast);

        let response2 = await fetch('http://localhost:3030/jsonstore/forecaster/upcoming/' + code);
        let data2 = await response2.json();

        let divForeCastInfo = document.createElement('div');
        divForeCastInfo.className = 'forecast-info';

        let labelDiv2 = document.createElement('div');
        labelDiv2.className = 'label';
        labelDiv2.textContent = 'Three-day forecast';
        threeDayForecast.appendChild(labelDiv2);

        for (const obj of data2.forecast) {


            let spanUpcoming = document.createElement('span');
            spanUpcoming.className = 'upcoming';

            let symbolForThreeDays = obj.condition;

            let spanSymbolForThreeDays = document.createElement('span');
            spanSymbolForThreeDays.className = 'symbol';
            spanSymbolForThreeDays.innerHTML = weather[symbolForThreeDays];
            let spanDegreesForThreeDays = document.createElement('span');
            spanDegreesForThreeDays.className = 'forecast-data';
            spanDegreesForThreeDays.innerHTML = `${obj.low}${weather.Degrees}/${obj.high}${weather.Degrees}`
            let spanWetherForThreeDays = document.createElement('span');
            spanWetherForThreeDays.className = 'forecast-data';
            spanWetherForThreeDays.textContent = obj.condition;

            threeDayForecast.appendChild(divForeCastInfo);
            divForeCastInfo.appendChild(spanUpcoming);
            spanUpcoming.appendChild(spanSymbolForThreeDays);
            spanUpcoming.appendChild(spanDegreesForThreeDays);
            spanUpcoming.appendChild(spanWetherForThreeDays);
        }
    }


}

attachEvents();