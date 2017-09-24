#!/bin/bash

###
 #      restart_script.sh
 #
 #      Script per il riavvio del software di gestione campanelle
 #		Restart script for the "campanella" bell management system
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

green_color () {
	echo -e "\e[1;31m";
}
default_color () {
	echo -e "\e[1;0m";
}

green_color;
echo "Checking for root permissions..."
default_color;

#sleep 1;

if [[ $EUID -ne 0 ]]; then
		green_color;
		echo "This script must be run as root";
	default_color;
		exit 1;
else
	green_color;
	echo "Root OK";
	default_color;
fi

killall demone.py
killall serial_daemon.py
killall lcd_daemon.py
/opt/campanella/demone.py &
/opt/campanella/serial_daemon.py &
/opt/campanella/lcd_daemon.py &
exit
