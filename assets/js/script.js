var citySearchEl = document.querySelector("#city-search")
var cityInputEl = document.querySelector("#city-name");

var formSubmitHandler = function(event) {
    event.preventDefault();

    var cityName = cityInputEl.value.trim();

    if (cityName) {
        cityInputEl.value = "";
    } else {
        alert("Please enter a city name!");
    }
};

var getCityNames = function(city) {
    var apiUrl = "https://api.openweathermap.org/data/2.5/weather?{city}&units=imperial&appid=${apiKey}";

    fetch(apiUrl)
        .then(function(response) {
            if (response.ok) {
                response.json().then(function(data) {
                    displayWeather(data, city);
                });
            } else {
                alert("Error");
            }
        })
}