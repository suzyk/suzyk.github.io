//const API_key = "e20b0d4e44f38c0ff91e099610ce28d5";

function onGeoSuccess(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_key}`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const weatherContainer = document.querySelector("#temperature");
            const cityContainer = document.querySelector("#location");
            const weatherIcon = document.querySelector("#weatherIcon");
            weatherIcon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
            weatherContainer.innerText = `${Math.floor(data.main.temp)}°`;
            cityContainer.innerText = data.name;
            
        })
}
function onGeoError(){
    alert("can't find your location.");
}

function getWeatherInfo(){
    navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
}


