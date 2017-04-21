#! /usr/bin/python

###
 #      power_daemon.py
 #
 #		Python daemon that powers off the system when the shutdown button is pressed
 #		For more information on the software please visit:
 #		https://lizzit.it/campanella
 #
 #      Written by: Michele Lizzit <michele@lizzit.it>, 20 Mar 2014
 #      Last update: 25 Apr 2016
 #      Version: 1.2
 #
 #      Copyright (c) 2016 Michele Lizzit
 #     	
 #      This program is free software: you can redistribute it and/or modify
 #		it under the terms of the GNU Affero General Public License as published
 #		by the Free Software Foundation, either version 3 of the License, or
 #		(at your option) any later version.
 #		
 #		This program is distributed in the hope that it will be useful,
 #		but WITHOUT ANY WARRANTY; without even the implied warranty of
 #		MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 #		GNU Affero General Public License for more details.
 #		
 #		You should have received a copy of the GNU Affero General Public License
 #		along with this program.  If not, see <http://www.gnu.org/licenses/>.
###

GPIO_STATUS_LED_PIN = 11 #LED DI STATO
GPIO_SHUTDOWN_BUTTON_PIN = 12 #PULSANTE SPEGNIMENTO

import os
import time
import RPi.GPIO as GPIO

time.sleep(3)

print ""
print ""
print "Programma python scritto da Michele Lizzit"
print "Written by Michele Lizzit"
print "Last update 25 Apr 2016"
print ""
print ""

GPIO.setwarnings(False)
GPIO.setmode(GPIO.BOARD)
GPIO.setup(GPIO_SHUTDOWN_BUTTON_PIN, GPIO.IN, pull_up_down=GPIO.PUD_UP)
GPIO.setup(GPIO_STATUS_LED_PIN, GPIO.OUT)
GPIO.output(GPIO_STATUS_LED_PIN, True)
gpio_status = True
blink_time = 0.5
shutdown = 0

while 1:
	input_value = GPIO.input(GPIO_SHUTDOWN_BUTTON_PIN)
	if (input_value == 0) and (shutdown == 0) :
		os.system("sudo shutdown -h now")
		blink_time = 0.05
		shutdown = 1
	time.sleep(blink_time)
	gpio_status = not gpio_status
	GPIO.output(GPIO_STATUS_LED_PIN, gpio_status)
