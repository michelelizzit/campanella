#! /usr/bin/python

###
 #      watchdog.py
 #
 #      Watchdog python per la gestione delle campanelle
 #		Python watchdog for the "campanella" bell management system
 #		For more information on the software please visit:
 #		https://lizzit.it/campanella
 #
 #      Written by: Michele Lizzit <michele@lizzit.it>, 20 Mar 2014
 #      Last update: 22 Sept 2017
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

#pin definiti con numerazione GPIO.BOARD
GPIO_LED_RED_PIN = 13
GPIO_LED_GREEN_PIN = 16
GPIO_LED_BLUE_PIN = 18

import commands
import RPi.GPIO as GPIO
import time
import os

def set_led_color(color) :
	if color == "red":
		GPIO.output(GPIO_LED_RED_PIN, False)
		GPIO.output(GPIO_LED_GREEN_PIN, True)
		GPIO.output(GPIO_LED_BLUE_PIN, True)
	if color == "green":
		GPIO.output(GPIO_LED_RED_PIN, True)
		GPIO.output(GPIO_LED_GREEN_PIN, False)
		GPIO.output(GPIO_LED_BLUE_PIN, True)
	if color == "off":
		GPIO.output(GPIO_LED_RED_PIN, True)
		GPIO.output(GPIO_LED_GREEN_PIN, True)
		GPIO.output(GPIO_LED_BLUE_PIN, True)
	if color == "blue":
		GPIO.output(GPIO_LED_RED_PIN, True)
		GPIO.output(GPIO_LED_GREEN_PIN, True)
		GPIO.output(GPIO_LED_BLUE_PIN, False)
	if color == "yellow":
		GPIO.output(GPIO_LED_RED_PIN, True)
		GPIO.output(GPIO_LED_GREEN_PIN, False)
		GPIO.output(GPIO_LED_BLUE_PIN, False)

print ""
print ""
print "Programma python scritto da Michele Lizzit"
print "Written by Michele Lizzit"
print "Last update 25 Apr 2016"
print ""
print ""

GPIO.setwarnings(False)
GPIO.setmode(GPIO.BOARD)
GPIO.setup(GPIO_LED_GREEN_PIN, GPIO.OUT)
GPIO.setup(GPIO_LED_BLUE_PIN, GPIO.OUT)
GPIO.setup(GPIO_LED_RED_PIN, GPIO.OUT)

prev_power_daemon = 0
prev_demone = 0
prev_serial_daemon = 0
prev_lcd_daemon = 0

while (1) :
	output = commands.getoutput('ps -A')
	if not ('demone.py' in output):
		if (prev_demone == 0) :
			prev_demone = 1
			
			print time.strftime("[%H:%M:%S %d/%m/%Y") + "] Watchdog: CAMPANELLA DAEMON CRASHED, setting led color to red"
			command = "logger " + time.strftime("[%H:%M:%S %d/%m/%Y") + "] Watchdog: CAMPANELLA DAEMON CRASHED, setting led color to red";
			os.system(command)
		set_led_color("red")
	else :
		prev_demone = 0
	if not ('power_daemon.py' in output):
		if (prev_power_daemon == 0) :
			prev_power_daemon = 1
			print time.strftime("[%H:%M:%S %d/%m/%Y") + "] Watchdog: POWER DAEMON CRASHED, setting led color to red"
			command = "logger " + time.strftime("[%H:%M:%S %d/%m/%Y") + "] Watchdog: POWER DAEMON CRASHED, setting led color to red"
			os.system(command)
		set_led_color("red")
	else :
		prev_power_daemon = 0
		
	if not ('serial_daemon.p' in output):
		if (prev_serial_daemon == 0) :
			prev_serial_daemon = 1
			print time.strftime("[%H:%M:%S %d/%m/%Y") + "] Watchdog: SERIAL DAEMON CRASHED, setting led color to red"
			command = "logger " + time.strftime("[%H:%M:%S %d/%m/%Y") + "] Watchdog: SERIAL DAEMON CRASHED, setting led color to red";
			os.system(command)
		set_led_color("red")
	else :
		prev_serial_daemon = 0

	if not ('lcd_daemon.py' in output):
		if (prev_lcd_daemon == 0) :
			prev_lcd_daemon = 1
			print time.strftime("[%H:%M:%S %d/%m/%Y") + "] Watchdog: LCD DAEMON CRASHED, setting led color to red"
			command = "logger " + time.strftime("[%H:%M:%S %d/%m/%Y") + "] Watchdog: LCD DAEMON CRASHED, setting led color to red";
			os.system(command)
		set_led_color("red")
	else :
		prev_lcd_daemon = 0
	#if (prev_demone == 0) and (prev_serial_daemon == 0) and (prev_power_daemon == 0) :
		#set_led_color("green")
	time.sleep(0.5)
	
		
