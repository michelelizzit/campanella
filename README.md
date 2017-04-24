# [Campanella](https://lizzit.it/campanella) - Open-source bell management system

    README.md
 
    Written by: Michele Lizzit <lizzit.it>, 21 Apr 2017
    Last update: 21 Apr 2017
    Version: 1.1


Campanella - Open-source bell management system  
More informations are avaiable at the project website: https://lizzit.it/campanella


<img src="https://github.com/michelelizzit/campanella/raw/master/printables/campanella_logo.png" width="300px" style="float: right;">



Campanella is a bell management system designed for schools.  
It is composed of a Raspberry PI (or any other Linux machine), and a loudspeaker or regular electric bell.  
The system can be configured through a user-friendly web interface and represents a valid and accurate alternative to the expensive (and often inaccurate) timers that are often used for this purpose.  
The system rings the bell and/or plays a sound on the loudspeaker according to the customizable internal schedule.  
The software is very versatile and can plan different timetables: daily, weekly, monthly or custom.  
The internal clock is automatically synchronized with a remote atomic clock via NTP once per day.  
The system is designed for schools but is suitable for a lot more applications!  
The system supports an optional HD44780 or serial LCD to display the time from the internal clock.  


Campanella has been tested on the following hardware:  
|--|
|Raspberry PI 1 model B|
|Raspberry PI 3 model B|

## Installation procedure (EXPERIMENTAL)  
_Note: this procedure is HIGHLY EXPERIMENTAL and may irreversibly damage your system, please make sure you have a full backup of your system before proceeding_  
_Note: this procedure has only been tested on Raspbian_  

```bash
sudo apt-get update
sudo apt-get -y install git
cd
git clone https://github.com/michelelizzit/campanella/
cd campanella
sudo ./install_script.sh
```

## Schematic  
![Schematic](/printables/schematic.png)

Pins:  

Name | Pin
--|--
GPIO_CAMPANELLA_PIN | 7
GPIO_LED_RED_PIN | 13
GPIO_LED_GREEN_PIN | 16
GPIO_LED_BLUE_PIN | 18
GPIO_BUTTON_PIN | 15

Optional HD44780 LCD:

LCD Pin| RaspberryPI Pin
--|--
RS_PIN | 19
RW_PIN | 21
ENABLE_PIN | 3
DATA_PIN | 23, 26, 22, 24

_Note: Pins are numerated according to the PIN.BOARD numeration scheme_  

## Screenshots

![Screenshot1](/printables/screenshots/screenshot1.png)
![Screenshot2](/printables/screenshots/screenshot2.png)
![Screenshot3](/printables/screenshots/screenshot3.png)

