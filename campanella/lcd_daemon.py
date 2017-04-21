#! /usr/bin/python

###
 #      lcd_daemon.py
 #
 #		Python daemon for managing an HD44780 LCD, used by the "campanella" bell management system
 #
 #		For more information on the software please visit:
 #		https://lizzit.it/campanella
 #
 #      Written by: Michele Lizzit <michele@lizzit.it>, 25 Apr 2016
 #      Last update: 25 Apr 2016
 #      Version: 1.0
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

import time
import RPi.GPIO as GPIO
from RPLCD import CharLCD, cleared, cursor

print ""
print "Programma python scritto da Michele Lizzit"
print "Written by Michele Lizzit"
print "Last update 25 Apr 2016"
print ""

campanella = (
	0b00100,
	0b00100,
	0b00100,
	0b01110,
	0b01110,
	0b11111,
	0b00100,
	0b00000
)


lcd = CharLCD(pin_rs=19, pin_rw=21, pin_e=3, pins_data=[23, 26, 22, 24],
              numbering_mode=GPIO.BOARD,
              cols=20, rows=4, dotsize=8)
lcd.create_char(0, campanella)

while (1) :
	lcd.clear()
	lcd.write_string(unichr(0))
	lcd.write_string(u'Gestione campanelle')
	lcd.cursor_pos = (1, 0)
	timeStr = time.strftime("%H:%M:%S %d/%m")
	lcd.write_string(timeStr)
	time.sleep(1);