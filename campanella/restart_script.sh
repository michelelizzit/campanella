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

sudo killall demone.py
sudo killall serial_daemon.py
sudo killall lcd_daemon.py
sudo /opt/campanella/demone.py &
sudo /opt/campanella/serial_daemon.py &
sudo /opt/campanella/lcd_daemon.py &
exit
