let w_input = document.querySelector(".weather_input");
let w_location = document.querySelector(".weather_location");
let w_date_time = document.querySelector(".weather_date_time");
let w_type = document.querySelector(".weather_type");
let w_type_icon = document.querySelector(".weather_type_icon");
let w_temp = document.querySelector(".weather_tempreature");
let w_min = document.querySelector(".weather_min");
let w_max = document.querySelector(".weather_max");
let w_feels_like = document.querySelector(".weather_feels_like");
let w_humidity = document.querySelector(".weather_humidity");
let w_wind = document.querySelector(".weather_wind");
let w_pressure = document.querySelector(".weather_pressure");
let form_input = document.querySelector('.form_input');
const APIKey = "54b3a04da8c1c622e1be75369e53371e";
let data;

const searchCity = (event)=>{
  event.preventDefault();
  city = w_input.value;
  console.log(city);
  fetchData(city);
}

form_input.addEventListener('submit', searchCity)

const getFullCountryName = (country) => {
  return new Intl.DisplayNames(["en"], { type: "region" }).of(country);
};

let getFullDateTimeFormat = (dt) => {
  const date = new Date(dt*1000)
  const options = {
    weekday : "long",
    year : "numeric",
    month : "long",
    day : 'numeric',
    hour : 'numeric',
    minute : 'numeric',
    second : 'numeric',
  }
  
  return new Intl.DateTimeFormat('en-US',options).format(date);
};

const fetchData = async (city) => {
  const API = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}`;
  try {
    const resp = await fetch(API);
    console.log("API Fetched Successfully.");
    data = await resp.json();
    var { weather, main, dt, sys, name, wind } = data;
    console.log(data);
    w_input.value="";  
  } catch (error) {
    console.log("Error Fetching API : ", error);
  }

  w_location.textContent = `${name}, ${getFullCountryName(sys.country)}`;
  w_date_time.textContent = `${getFullDateTimeFormat(dt)}`;
  w_type.textContent = `${weather[0].main}`;
  w_type.classList.add(`${weather[0].icon}`);
  w_min.innerHTML = `Min: ${Math.floor(main.temp_min)}&#176`;
  w_max.innerHTML = `Max: ${Math.ceil(main.temp_max)}&degs`;
  w_temp.innerHTML = `${Math.round(main.temp)}&#176`;
  w_feels_like.innerHTML = `${Math.round(main.feels_like)}&deg`;
  w_pressure.textContent = `${Math.round(main.pressure)}  hPa`;
  w_wind.textContent = `${Math.round(wind.speed)} m/s`;
  w_humidity.textContent = `${Math.round(main.humidity)} %`;
  w_type_icon.innerHTML = `<img src="http://openweathermap.org/img/wn/${weather[0].icon}@4x.png">`
};

window.addEventListener("load", fetchData("Delhi"));
