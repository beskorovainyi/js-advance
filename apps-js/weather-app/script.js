var humidity = document.getElementById('humidity');
var pressure = document.getElementById('pressure');
var temperature = document.getElementById('temperature');
var windSpeed = document.getElementById('wind-speed');
var weatherSummary = document.getElementById('weather-summary');

var cityName = document.getElementById('city')

var getWeatherButton = document.getElementById('get-weather');

/**
 * get current location and call functions getWeatherDataByLocation, getWeatherDataByCity
 * @function getLocation
 * @returns
 */
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      getWeatherDataByLocation(position.coords.latitude, position.coords.longitude)
      getWeatherDataByCity(cityName.value)
    })
  } else {
    alert('Your browser does not support Navigator API')
  }
}


/**
 * get weather data by location
 * @function getWeatherData
 * @param latitude
 * @param longitude
 * @returns
 */
function getWeatherDataByLocation(latitude, longitude) {
  fetch('http://api.openweathermap.org/data/2.5/weather?lat=' + latitude + '&lon=' + longitude + '&appid=095a129b15e665be0edee7f91fb16bf0')
    .then((result) => {
      return result.json();
    })
    .then((data) => {
      displayData(data)
    })
    .catch((err) => {
      console.log(err)
    })
}

/**
 * get weather data by name city
 * @param city
 */
function getWeatherDataByCity(city) {
  fetch('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=095a129b15e665be0edee7f91fb16bf0')
    .then((result) => {
      return result.json()
    })
    .then((data) => {
      console.log(data)
    })
    .catch((err) => {
      console.log(err)
    })
}

/**
 * show data on display
 * @function displayData
 * @param data
 */
function displayData(data) {
  temperature.innerText = data.main.temp
  pressure.innerText = data.main.pressure
  humidity.innerText = data.main.humidity
  windspeed.innerText = data.wind.speed
  // weatherSummaryByLocation.innerText = data.wind.speed

}

getWeatherButton.addEventListener('click', getLocation);