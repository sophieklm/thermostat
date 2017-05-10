'use strict';

function Thermostat(){
  this.temperature = 20;
};

Thermostat.prototype.getTemperature = function() {
  return this.temperature;
};

Thermostat.prototype.increase = function(){
  this.temperature += 1;
};

Thermostat.prototype.decrease = function(){
  this.temperature -= 1;
};
