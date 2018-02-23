$(document).ready(function(){

  var thermostat = new Thermostat();

  updateTemp();

  $('#up').click(function(){
    thermostat.up();
    updateTemp();
  });

  $('#down').click(function(){
    thermostat.down();
    updateTemp();
  });

  $('#power-save').click(function(){
    $(this).toggleClass('on');
  });


  function updateTemp() {
    $('#current-temp').text(thermostat.getTemp());
  };
});
