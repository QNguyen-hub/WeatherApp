var apiKey = "002ed83e9e4c82917cbc204e7a267650";
var apiWeather = `https://api.openweathermap.org/data/2.5/onecall?${apiKey}`;
var submit = document.querySelector("#submit");

submit.addEventListener("click", function () {
  var city = document.querySelector("#city");
  localStorage.setItem("city", city.value);
  var location = localStorage.getItem("city");
  var apiGeo = `http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=840&appid=${apiKey}`;
  fetch(apiGeo)
    .then((response) => response.json())
    .then((data) => console.log(data));
});
