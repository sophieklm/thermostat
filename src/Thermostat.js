'use strict';

function Thermostat(){
  this.MINIMUM_TEMPERATURE = 10;
  this.MAX_TEMP_PSM_ON = 25;
  this.MAX_TEMP_PSM_OFF = 32;
  this.DEFAULT_TEMPERATURE = 20;
  this.temperature = this.DEFAULT_TEMPERATURE;
  this.powerSavingMode = true;
  this.MEDIUM_ENERGY_USAGE_LIMIT = 18;
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
  if (this.isPowerSavingModeOn() === false) {
    return this.temperature === this.MAX_TEMP_PSM_OFF;
  }
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

Thermostat.prototype.resetTemperature = function() {
  return this.temperature = this.DEFAULT_TEMPERATURE;
}

Thermostat.prototype.energyUsage = function() {
  if (this.temperature < this.MEDIUM_ENERGY_USAGE_LIMIT){
    return 'low-usage';
  }
  if (this.temperature > this.MAX_TEMP_PSM_ON){
    return 'high-usage';
  }
  return 'medium-usage';
}
