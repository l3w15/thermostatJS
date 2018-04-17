#Thermostat

To clone and run tests / app:
```
$ git clone git@github.com:l3w15/thermostatJS.git
$ open SpecRunner.html
$ open Thermostat. html
```

[![Screen_Shot_2018-04-17_at_07.14.18.png](https://s31.postimg.cc/pprtldg3v/Screen_Shot_2018-04-17_at_07.14.18.png)](https://postimg.cc/image/55mzmw0cn/)

Our task was to build a thermostat with the following functionality:
```
Thermostat starts at 20 degrees
You can increase the temperature with an up function
You can decrease the temperature with a down function
The minimum temperature is 10 degrees
If power saving mode is on, the maximum temperature is 25 degrees
If power saving mode is off, the maximum temperature is 32 degrees
Power saving mode is on by default
You can reset the temperature to 20 with a reset function
You can ask about the thermostat's current energy usage: < 18 is low-usage, < 25 is medium-usage, anything else is high-usage.
(In the challenges where we add an interface, low-usage will be indicated with green, medium-usage indicated with black, high-usage indicated with red.)
```

There was a bonus task to show the current outdoor temperature, we then built on that by allowing a user to get the weather for any city in the world through an API call to openweathermap.org.
