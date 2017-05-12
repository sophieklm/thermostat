$( document ).ready(function() {
   var thermostat = new Thermostat();
   updateTemperature();

   displayWeather('London');
   $( '#psm-mode' ).text('On');

   $('#increase-temp').click(function(){
     thermostat.increase();
     updateTemperature();
   });

   $('#decrease-temp').click(function() {
     thermostat.decrease();
     updateTemperature();

   });

   $('#reset').click(function(){
     thermostat.resetTemperature();
     updateTemperature();
   });

   $('#psm-on').click(function(){
     thermostat.switchPSMOn();
     updateTemperature();
     $( '#psm-mode' ).text('On');
   });

   $('#psm-off').click(function(){
     thermostat.switchPSMOff();
     updateTemperature();
     $( '#psm-mode' ).text('Off');
   });

   $('#psm-toggle').click(function(){
    thermostat.togglePSM();
    toggle_PSM();
    updateTemperature();
   });


   $('#current-city').change(function() {
    var city = $('#current-city').val();
    displayWeather(city);
   });

   function updateTemperature(){
    $('#temperature').text(thermostat.getTemperature());
    $('#energy-usage').text(thermostat.energyUsage());
    $('#energy-usage').attr('class', thermostat.energyUsage());
    $('#temperature').attr('class', thermostat.energyUsage());
   }

   function displayWeather(city) {
   $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=188d4bfce0208cc4d0252a7dc677a8f6&units=metric', function(data) {
     $('#current-temperature').text(data.main.temp);
   });
   }

   function toggle_PSM(){
     if ( thermostat.isPowerSavingModeOn() === true ){
     $( '#psm-mode' ).text('On');
     }
     else {
     $( '#psm-mode' ).text('Off');}
   }

$("#save-settings").click(function(){
    $.post("http://localhost:9292/temperature",
    {
        saved_temperature: thermostat.temperature,
    },
    function(data, status){
        alert("Data: " + data + "\nStatus: " + status);
    });
});

$("#load-settings").click(function(){
    $.get("http://localhost:9292/temperature", function(data, status){
        alert("Data: " + data + "\nStatus: " + status);
        thermostat.temperature = data;
        $('#temperature').text(data);
        updateTemperature();
    });
});


});
