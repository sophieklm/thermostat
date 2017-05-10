'use strict';

describe('Thermostat', function(){
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it('starts at 20 degrees', function(){
    expect(thermostat.getTemperature()).toEqual(20);
  });

  it('can increase the temperature', function(){
    thermostat.increase();
    expect(thermostat.getTemperature()).toEqual(21);
  });

  it('can decrease the temperature', function() {
    thermostat.decrease();
    expect(thermostat.getTemperature()).toEqual(19)
  });

  it('has a minimum of 10 degrees', function() {
    for (var i = 0; i < 11; i ++){
      thermostat.decrease();
    }
    expect(thermostat.getTemperature()).toEqual(10);
  });

  it('has a power saving mode on by default', function(){
    expect(thermostat.isPowerSavingModeOn()).toBe(true);
  });

  it('has a max temp of 25 when PSM on', function(){
    for (var i = 0; i < 6; i ++){
      thermostat.increase();
    }
    expect(thermostat.getTemperature()).toEqual(25);
  });

  it('can turn off power saving mode', function(){

  });

});
