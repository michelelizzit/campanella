# Campanella - Open-source bell management system

    README.md
 
    Written by: Michele Lizzit <michele@lizzit.it>, 21 Apr 2017
    Last update: 21 Apr 2017
    Version: 1.1


Campanella - Open-source bell management system  

Campanella is a bell management system designed for schools. It can control the bells of a school through the internet.
With user-friendly interface you can manage a system of RaspberryPi's.
You have only to connect a loudspeaker or the classic school bell to the RaspberryPi and you are ready! 
Using a single software for all the bells, the managing becomes very easy: all the school bells will ring at the same time and in a few seconds you will be able to change the timetable.
The software is very versatile and can plan different timetables: daily, weekly, monthly or whatever.
The software automatically syncronizes the internal clock with a remote atomic clock using the NetworkTimeProtocol.
The software is designed for schools but is suitable for a lot more applications!

Campanella has been tested on the following hardware:  
|--|
|Raspberry PI 1 model B|
|Raspberry PI 3 model B|

Installation procedure (EXPERIMENTAL):  
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

Pins:  
_Note: Pins are numerated according to the PIN.BOARD numeration scheme_  
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
