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

  it('has a max temp of 32 when PSM off', function(){
    thermostat.switchPSMOff()
    for (var i = 0; i < 13; i ++){
      thermostat.increase();
    }
    expect(thermostat.getTemperature()).toEqual(32);
  });

  it('can turn off power saving mode', function(){
    thermostat.switchPSMOff();
    expect(thermostat.isPowerSavingModeOn()).toBe(false);
  });

  it('can turn on power saving mode', function(){
    thermostat.switchPSMOff();
    thermostat.switchPSMOn();
    expect(thermostat.isPowerSavingModeOn()).toBe(true);
  });

  it('can reset temperature to default', function(){
    for (var i = 0; i < 4; i ++){
      thermostat.increase();
    }
    thermostat.resetTemperature();
    expect(thermostat.getTemperature()).toEqual(20);
  })

  describe('show energy usasge', function(){
    describe('when temp less than 18', function(){
      it('is low', function(){
        for (var i = 0; i < 5; i ++){
          thermostat.decrease();
        }
        expect(thermostat.energyUsage()).toEqual('low-usage');
      });
    });
    describe('when between 18 and 25', function(){
      it('is medium', function(){
        expect(thermostat.energyUsage()).toEqual('medium-usage');
      });
    });
    describe('when temp over 25', function(){
      it('is low', function(){
        thermostat.switchPSMOff();
        for (var i = 0; i < 6; i ++){
          thermostat.increase();
        }
        expect(thermostat.energyUsage()).toEqual('high-usage');
      });
    });
  });
});
