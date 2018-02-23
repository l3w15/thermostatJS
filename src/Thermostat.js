'use strict';

const MIN_TEMP = 10;
const DEFAULT_TEMP = 20;

var Thermostat = function() {
  this.temperature = DEFAULT_TEMP;
  this.powerSave = true;
};

Thermostat.prototype = {
  up: function() {
    if (this.temperature < 25 && this.powerSave) {
      this.temperature ++;
    } else if (this.temperature < 32 && !this.powerSave) {
      this.temperature ++;
    } else {
      throw 'Maximum temperature reached'
    }
  },

  down: function() {
    if (this.temperature > MIN_TEMP){
      this.temperature --;
    } else {
      throw 'Minimum temperature reached';
    }
  },

  getTemp: function() {
    return this.temperature;
  },

  reset: function() {
    this.temperature = DEFAULT_TEMP;
  },

  energyUsage: function(){
    if (this.temperature < 18){
      return 'low-usage';
    } else if (this.temperature < 25){
      return 'medium-usage';
    } else {
      return 'high-usage';
    }
  },
};
