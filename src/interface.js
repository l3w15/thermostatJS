$(document).ready(function() {
  var thermostat = new Thermostat();

  updateTemp();
  updateUsage();

  $('#up').click(function() {
    thermostat.up();
    updateTemp();
    updateUsage();
  });

  $('#down').click(function() {
    thermostat.down();
    updateTemp();
    updateUsage();
  });

  $('#power-save').click(function() {
    $(this).toggleClass('on');
    $('.thermostat').toggleClass('eco');
    thermostat.powerSaveSwitch();
  });

  $('#reset-button').click(function(){
    thermostat.reset();
    updateTemp();
    updateUsage();
  });

  function updateTemp() {
    $('#current-temp').text(thermostat.getTemp());
  }

  function updateUsage() {
    $('#usage').text(thermostat.energyUsage());
    $('.temp-display').css('background-color', thermostat.color);
  }
});
