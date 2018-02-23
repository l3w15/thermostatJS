$(document).ready(function(){

  const API_KEY = '475e86861ce16b233d9d515fea8e9473';

  // 51.5173436,-0.0754695

  const URL = 'https://api.openweathermap.org/data/2.5/weather?lat=51.51&lon=-0.07&units=metric&APPID=';

  $.get(URL + API_KEY, function(data){
    console.log(data);

    $('#location').text(data.name);
    $('#local-temp').prepend(data.main.temp);
    $('#weather-description').text(data.weather[0].description);
  });
});
