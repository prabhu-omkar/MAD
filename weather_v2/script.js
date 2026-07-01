const weatherData = {
    chicago: { name: 'Chicago', temp: 10, desc: 'Breezy', humidity: '55%', wind: '24 km/h' },
    miami: { name: 'Miami', temp: 28, desc: 'Sunny', humidity: '75%', wind: '12 km/h' },
    seattle: { name: 'Seattle', temp: 13, desc: 'Drizzle', humidity: '85%', wind: '8 km/h' },
    boston: { name: 'Boston', temp: 16, desc: 'Overcast', humidity: '60%', wind: '15 km/h' },
    dublin: { name: 'Dublin', temp: 12, desc: 'Rainy', humidity: '90%', wind: '20 km/h' },
    madrid: { name: 'Madrid', temp: 25, desc: 'Clear Sky', humidity: '35%', wind: '9 km/h' },
    vienna: { name: 'Vienna', temp: 17, desc: 'Partly Cloudy', humidity: '50%', wind: '11 km/h' },
    amsterdam: { name: 'Amsterdam', temp: 14, desc: 'Showers', humidity: '80%', wind: '18 km/h' }
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
    selectCity('chicago');
});
