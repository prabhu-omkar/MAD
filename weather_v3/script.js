const weatherData = {
    beijing: { name: 'Beijing', temp: 22, desc: 'Hazy', humidity: '45%', wind: '6 km/h' },
    seoul: { name: 'Seoul', temp: 19, desc: 'Partly Cloudy', humidity: '55%', wind: '10 km/h' },
    singapore: { name: 'Singapore', temp: 31, desc: 'Thunderstorms', humidity: '80%', wind: '14 km/h' },
    dubai: { name: 'Dubai', temp: 38, desc: 'Sunny & Hot', humidity: '25%', wind: '15 km/h' },
    bangkok: { name: 'Bangkok', temp: 33, desc: 'Humid', humidity: '70%', wind: '12 km/h' },
    capetown: { name: 'Cape Town', temp: 16, desc: 'Windy', humidity: '60%', wind: '22 km/h' }
};

const cityNameDisplay = document.getElementById('city-name');
const tempDisplay = document.getElementById('temperature');
const descDisplay = document.getElementById('description');
const humidityDisplay = document.getElementById('humidity');
const windDisplay = document.getElementById('wind');

function selectCity(cityKey) {
    const data = weatherData[cityKey];
    if (!data) return;

    cityNameDisplay.textContent = data.name;
    tempDisplay.textContent = `${data.temp}°C`;
    descDisplay.textContent = data.desc;
    humidityDisplay.textContent = data.humidity;
    windDisplay.textContent = data.wind;

    const buttons = document.querySelectorAll('.city-btn');
    buttons.forEach(btn => {
        if (btn.getAttribute('onclick').includes(cityKey)) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

window.addEventListener('DOMContentLoaded', () => {
    selectCity('beijing');
});
