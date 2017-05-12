Thermostat
=================

Test-Driven Development of a thermostat using JavaScript, jQuery, and Open Weather Map API.

Temperature setting can be stored and retrieved using the save and load settings buttons, by running a local server using sinatra:

```
$ git clone https://github.com/sophieklm/thermostat
$ cd thermostat
$ bundle
$ rackup
```

Features:
-------

* Thermostat starts at 20 degrees
* You can increase the temperature with an up function
* You can decrease the temperature with a down function
* The minimum temperature is 10 degrees
* If power saving mode is on, the maximum temperature is 25 degrees
* If power saving mode is off, the maximum temperature is 32 degrees
* Power saving mode is on by default
* You can reset the temperature to 20 with a reset function
* You can ask about the thermostat's current energy usage: < 18 is `low-usage`, < 25 is `medium-usage`, anything else is `high-usage`.
