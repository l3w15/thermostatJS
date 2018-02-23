$(document).ready(function() {
  const API_KEY = 'APPID=475e86861ce16b233d9d515fea8e9473';
  const URL = 'https://api.openweathermap.org/data/2.5/weather?';

  if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var lat = `lat=${position.coords.latitude.toFixed(2)}`;
      var long = `lon=${position.coords.longitude.toFixed(2)}`;
      console.log(lat);
      console.log(long);

      $.get(`${URL}${lat}&${long}&units=metric&${API_KEY}`, function(data) {
        getWeather(data);
      });
    });
  } else {
    console.log('geolocation unavailable!');
  }

  $('#search-city').click(function() {
    var $city = $('#city').val();
    console.log($city);
    $.get(`${URL}q=${$city}&units=metric&${API_KEY}`, function(data) {
      getWeather(data);
    });
    $('#city').val('');
  });

  function getWeather(data) {
    console.log(data);
    $('#location').text(data.name);
    $('#local-temp').text(`${data.main.temp}${String.fromCharCode(176)}C   `);
    $('#weather-description').text(data.weather[0].description);
  };
});
