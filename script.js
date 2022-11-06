function formatDate(date) {
let hours = date.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let minutes = date.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}

let dayindex=date.getDay();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[daysIndex];

return `${day} ${hours}:${minutes}`;
}
	
let dateElement = document.querySelector("#date");
let currentTime = new Date();
dateElement.innerHTML = formatDate(currentTime);

function displayWeatherCondition(response) { 
let cityElement = document.querySelector("#city");
let dateElement = document.querySelector("#date");
let temperatureElement = document.querySelector("#temperature");
let iconElement = document.querySelector("#icon");
let descriptionElement = document.querySelector("#description");
let windElement = document.querySelector("#wind");
let humidityElement = document.querySelector("#humidity");

cityElement.innerHTML = response.data.name;
dateElement.innerHTML = formatDate(response.data.dt * 1000);
celciusTemperature = response.data.main.temp;
temperatureElement.innerHTML = `Math.round(celciusTemperature);
descriptionElement.innerHTML = response.data.weather[0].description;
windElement.innerHTML = Math.round(response.data.wind.speed);  
humidityElement.innerHTML = Math.round(response.data.main.humidity);


function search(city) {
    let apiKey = "72bb9dab46b9ec3d65f423c63f27a9b8";
  let apiUrl = `https:api//api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemperature);
}

function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#city-input").value;

  search(city);
}
let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("click", handleSubmit)

function showPosition(position) {
  let apiKey = "72bb9dab46b9ec3d65f423c63f27a9b8";
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}& appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(showTemperature);
}

function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(showPosition);
}
let currentLocationButton = document.querySelector("#current-location-button");
currentLocationButton.addEventListener("click", getCurrentLocation);

search(
  navigator.geolocation.getCurrentPosition(
    showPosition
  )
);
