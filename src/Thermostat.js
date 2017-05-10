'use strict';

function Thermostat(){
  this.MINIMUM_TEMPERATURE = 10;
  this.MAX_TEMP_PSM_ON = 25;
  this.temperature = 20;
  this.powerSavingMode = true;
}

Thermostat.prototype.getTemperature = function() {
  return this.temperature;
};

Thermostat.prototype.increase = function(){
  if(this.isMaximumTemperature()){
    return
  }
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
};

Thermostat.prototype.isMaximumTemperature = function (){
  return this.temperature === this.MAX_TEMP_PSM_ON;
};

Thermostat.prototype.isPowerSavingModeOn = function() {
  return this.powerSavingMode === true;
};

Thermostat.prototype.switchPSMOff = function() {
  return this.powerSavingMode = false;
};

Thermostat.prototype.switchPSMOn = function() {
  return this.powerSavingMode = true;
};
