#! /usr/bin/python

###
 #      serial_daemon.py
 #
 #		Python daemon for controlling a serial LCD connected to the 
 #		"campanella" bell management system
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

import time
import serial

SERIAL_PORT="/dev/ttyAMA0"

print ""
print "Programma python scritto da Michele Lizzit"
print "Written by Michele Lizzit"
print "Last update 25 Apr 2016"
print ""



arduino = serial.Serial(SERIAL_PORT)


while (1) :
	try :
		val = arduino.readline()
		time.sleep(0.1)
		#print val
		if "b" in val :
			arduino.write(str(round(time.time(),0))[:-2] + ';')
		else :
			print "Error: received unexpected data: " + val;
	except OSError:
		print "Serial error, retrying in 10 seconds..."
		time.sleep(10)
	except serial.serialutil.SerialException:
		print "Device reports readiness to read but no data returned, device disconnected? retrying in 3 seconds..."
		time.sleep(3)
		print "Re-opening serial port " + SERIAL_PORT + "..."
		arduino = serial.Serial(SERIAL_PORT)
	
