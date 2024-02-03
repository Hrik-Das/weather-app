const key = "d4a3ff5a8f3fd2860ccfcc3a49a15d06";
const url = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const search = document.querySelector('.search input');
const button = document.querySelector('.search button');
const weather  = document.querySelector('.weather-icon');

async function checkWeather(city){
    const response = await fetch(url + city + `&appid=${key}`);
    if(response.status == 404){
        document.querySelector('.error').style.display = "block";
        document.querySelector('.weather').style.display = "none";
    }else{
        let data = await response.json();
        document.querySelector('.city').innerHTML = data.name;
        document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
        document.querySelector('.wind').innerHTML = data.wind.speed + " KM/H";
        if(data.weather[0].main == "Clouds"){
            weather.src = "./images/clouds.png";
        }else if(data.weather[0].main == "Clear"){
            weather.src = "./images/clear.png";
        }else if(data.weather[0].main == "Rain"){
            weather.src = "./images/rain.png";
        }else if(data.weather[0].main == "Drizzle"){
            weather.src = "./images/drizzle.png";
        }else if(data.weather[0].main == "Mist"){
            weather.src = "./images/mist.png";
        }else{
            weather.src = "./images/clear.png";
        }
        document.querySelector('.weather').style.display = "block";
        document.querySelector('.error').style.display = "none";
    }
}

button.addEventListener("click", () => {
    checkWeather(search.value);
});