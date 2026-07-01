// Hardcoded Weather Data for 10 Cities
const weatherData = {
    london: { name: 'London', temp: 15, desc: 'Cloudy', humidity: '80%', wind: '14 km/h' },
    paris: { name: 'Paris', temp: 18, desc: 'Partly Cloudy', humidity: '65%', wind: '10 km/h' },
    tokyo: { name: 'Tokyo', temp: 21, desc: 'Rainy', humidity: '85%', wind: '18 km/h' },
    newyork: { name: 'New York', temp: 24, desc: 'Sunny', humidity: '50%', wind: '12 km/h' },
    sydney: { name: 'Sydney', temp: 22, desc: 'Clear Sky', humidity: '60%', wind: '15 km/h' },
    rome: { name: 'Rome', temp: 26, desc: 'Hot & Sunny', humidity: '45%', wind: '8 km/h' },
    berlin: { name: 'Berlin', temp: 16, desc: 'Foggy', humidity: '90%', wind: '6 km/h' },
    cairo: { name: 'Cairo', temp: 34, desc: 'Very Hot', humidity: '30%', wind: '20 km/h' },
    mumbai: { name: 'Mumbai', temp: 30, desc: 'Humid & Rainy', humidity: '95%', wind: '22 km/h' },
    toronto: { name: 'Toronto', temp: 12, desc: 'Windy', humidity: '70%', wind: '28 km/h' }
};

// DOM Display Elements
const cityNameDisplay = document.getElementById('city-name');
const tempDisplay = document.getElementById('temperature');
const descDisplay = document.getElementById('description');
const humidityDisplay = document.getElementById('humidity');
const windDisplay = document.getElementById('wind');

// Select a city and update the display details
function selectCity(cityKey) {
    const data = weatherData[cityKey];
    if (!data) return;

    // Update Text Content
    cityNameDisplay.textContent = data.name;
    tempDisplay.textContent = `${data.temp}°C`;
    descDisplay.textContent = data.desc;
    humidityDisplay.textContent = data.humidity;
    windDisplay.textContent = data.wind;

    // Update Active Button styling
    const buttons = document.querySelectorAll('.city-btn');
    buttons.forEach(btn => {
        if (btn.getAttribute('onclick').includes(cityKey)) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

// Auto-select the first city (London) on load
window.addEventListener('DOMContentLoaded', () => {
    selectCity('london');
});
