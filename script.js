// var apiWeather = `https://api.openweathermap.org/data/2.5/onecall?${apiKey}`;
var apiKey = "002ed83e9e4c82917cbc204e7a267650";
var weather = document.querySelector(".weather");
// var submit = document.querySelector("#submit");

var apiGeo = `http://api.openweathermap.org/geo/1.0/direct?q=Denver&limit=840&appid=002ed83e9e4c82917cbc204e7a267650`;
// var city = document.querySelector("#city");
var apiWeather = `https://api.openweathermap.org/data/2.5/forecast?q=${city.value}&appid=${apiKey}`;

document.getElementById("submit").addEventListener("click", (event) => {
  event.preventDefault();
  var city = document.getElementById("city").value;
  fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      let lat = data.city.coord.lat;
      let lon = data.city.coord.lon;
      document.getElementById("cityName").innerHTML = `City: ${data.city.name}`;
      document.getElementById(
        "temp"
      ).innerHTML = `Temp: ${data.list[0].main.temp}`;
      document.getElementById("humidity").innerHTML = `Humidity:
        ${data.list[0].main.humidity}`;
      document.getElementById(
        "wind"
      ).innerHTML = `Wind: ${data.list[0].wind.speed}`;
      document.getElementById(
        "cityName1"
      ).innerHTML = `City: ${data.city.name}`;
      document.getElementById(
        "temp1"
      ).innerHTML = `Temp: ${data.list[1].main.temp}`;
      document.getElementById("humidity1").innerHTML = `Humidity:
        ${data.list[1].main.humidity}`;
      document.getElementById(
        "wind1"
      ).innerHTML = `Wind: ${data.list[1].wind.speed}`;
      document.getElementById(
        "cityName2"
      ).innerHTML = `City: ${data.city.name}`;
      document.getElementById(
        "temp2"
      ).innerHTML = `Temp: ${data.list[2].main.temp}`;
      document.getElementById("humidity2").innerHTML = `Humidity:
        ${data.list[2].main.humidity}`;
      document.getElementById(
        "wind2"
      ).innerHTML = `Wind: ${data.list[2].wind.speed}`;
      document.getElementById(
        "cityName3"
      ).innerHTML = `City: ${data.city.name}`;
      document.getElementById(
        "temp3"
      ).innerHTML = `Temp: ${data.list[3].main.temp}`;
      document.getElementById("humidity3").innerHTML = `Humidity:
        ${data.list[3].main.humidity}`;
      document.getElementById(
        "wind3"
      ).innerHTML = `Wind: ${data.list[3].wind.speed}`;
    });
});
