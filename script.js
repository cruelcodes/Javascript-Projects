const inputBox = document.querySelector(".input-box");
const searchBtn = document.getElementById("searchBtn");
const weather_img = document.querySelector(".weather-img");
const temperature = document.querySelector(".temperature");
const description = document.querySelector(".description");
const humidity = document.querySelector("#humidity span");
const wind_speed = document.querySelector("#wind-speed span");


async function checkWeather(city){
    const api_key = "d3efcf31f7fd5282c96354d38ee55031";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
    const weatherData = await fetch(`${url}`).then(response => response.json());

    temperature.innerHTML = `${Math.round(weatherData.main.temp - 273.15)}<sup>o</sup>C`;
    description.innerHTML = weatherData.weather[0].description;
    humidity.innerHTML = `${weatherData.main.humidity}%`;
    wind_speed.innerHTML = `${weatherData.wind.speed}km/h`;

    if(weatherData.weather[0].main == "Clouds"){
        weather_img.src = "assets/cloud.png";
    }
    else if(weatherData.weather[0].main == "Clear"){
        weather_img.src = "assets/clear.png";
    }
    else if(weatherData.weather[0].main == "Rain"){
        weather_img.src = "assets/rain.png";
    }
    else if(weatherData.weather[0].main == "Drizzle"){
        weather_img.src = "assets/drizzle.png";
    }
    else if(weatherData.weather[0].main == "Mist"){
        weather_img.src = "assets/mist.png";
    }
    else if(weatherData.weather[0].main == "Snow"){
        weather_img.src = "assets/snow.png";
    }
    else if(weatherData.weather[0].main == "Haze"){
        weather_img.src = "assets/haze.png";
    }
    else if(weatherData.weather[0].main == "Thunderstorm"){
        weather_img.src = "assets/thunderstorm.png";
    }
    else{
        weather_img.src = "assets/cloud.png";
    }

    inputBox.value = "";
}

searchBtn.addEventListener("click", () => {
    checkWeather(inputBox.value);   

})




