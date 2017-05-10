'use strict';

function Thermostat(){
  this.MINIMUM_TEMPERATURE = 10
  this.temperature = 20;
};

Thermostat.prototype.getTemperature = function() {
  return this.temperature;
};

Thermostat.prototype.increase = function(){
  this.temperature += 1;
};

Thermostat.prototype.decrease = function(){
  if (this.isMinimumTemperature()) {
    return;
  }
  this.temperature -= 1;
};

Thermostat.prototype.isMinimumTemperature = function (){
  return this.temperature === this.MINIMUM_TEMPERATURE;
}
