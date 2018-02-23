$(document).ready(function() {
  const API_KEY = 'APPID=475e86861ce16b233d9d515fea8e9473';
  const URL = 'https://api.openweathermap.org/data/2.5/weather?';

  if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var lat = `lat=${position.coords.latitude.toFixed(2)}`;
      var long = `lon=${position.coords.longitude.toFixed(2)}`;

      $.get(`${URL}${lat}&${long}&units=metric&${API_KEY}`, function(data) {
        getWeather(data);
        console.log(data);
      });
    });
  } else {
    alert(
      'Please allow Geolocation if you want to know the current weather in your area'
    );
  }

  $('#search-city').click(function() {
    var $city = $('#city').val();
    $.get(`${URL}q=${$city}&units=metric&${API_KEY}`, function(data) {
      getWeather(data);
    });
    $('#city').val('');
  });

  function getWeather(data) {
    $('#location').text(data.name);
    $('#local-temp').text(`${data.main.temp}${String.fromCharCode(176)}C`);
    $('#weather-description').text(data.weather[0].description);
  }

  $('#unit-switch').click(function() {
    var $currentTemp = $('#local-temp').html();
    var $tempArray = $currentTemp.split('');
    var $unit = $tempArray.splice(-2, 2);
    var $temp = parseFloat($tempArray.join(''));
    if ($unit[1] == 'C') {
      $temp =
        ($temp * 9 / 5 + 32).toFixed(2).toString() +
        String.fromCharCode(176) +
        'F';
    } else {
      $temp =
        (($temp - 32) * 5 / 9).toFixed(2).toString() +
        String.fromCharCode(176) +
        'C';
    }

    $('#local-temp').text($temp);
  });
});
