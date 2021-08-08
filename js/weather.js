const API_KEY = "634e2ca416f44bbfaa138fe58ea45c85";

function ok(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metrc`;
    fetch(url)
    .then(response => response.json())
    .then(data =>{
        const city = document.querySelector("#weather span:first-child");
        const weather = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = data.weather[0].main;
    });
}

function notOk() {
    const city = document.querySelector("#weather span:first-child");
    const weather = document.querySelector("#weather span:last-child");
    city.innerText = "I can't find you";
    weather.innerText = "😫";
}

navigator.geolocation.getCurrentPosition(ok, notOk);