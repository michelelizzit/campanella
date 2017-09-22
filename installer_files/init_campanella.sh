#! /bin/sh
# /etc/init.d/campanella
#

### BEGIN INIT INFO
# Provides:          campanella
# Required-Start:    $all
# Required-Stop:     
# Default-Start:     2 3 4 5
# Default-Stop:      0 1 6
# Short-Description: Start campanella at boot time
# Description:       Campanella init script
### END INIT INFO

###
 #      init_campanella.sh
 #
 #      Init script of "campanella" software.
 #		For more information on the software please visit:
 #		https://lizzit.it/campanella
 #
 #      Written by: Michele Lizzit <michele@lizzit.it>, 20 Mar 2014
 #      Last update: 25 Apr 2016
 #      Version: 1.0
 #
 #      Copyright (c) 2016 Michele Lizzit
 #      
 #      This program is free software: you can redistribute it and/or modify
 #      it under the terms of the GNU Affero General Public License as published
 #      by the Free Software Foundation, either version 3 of the License, or
 #      (at your option) any later version.
 #    
 #      This program is distributed in the hope that it will be useful,
 #      but WITHOUT ANY WARRANTY; without even the implied warranty of
 #      MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 #      GNU Affero General Public License for more details.
 #    
 #      You should have received a copy of the GNU Affero General Public License
 #      along with this program.  If not, see <http://www.gnu.org/licenses/>.
###

case "$1" in
	start)
		echo "Starting script campanella..."
		/opt/campanella/start_script.sh
		echo "DONE"
	;;
	restart)
		echo "Stopping script campanella..."
		/opt/campanella/restart_script.sh
		echo "DONE"
	;;
	*)
		echo "Usage: /etc/init.d/campanella {start|restart}"
		exit 1
	;;
esac

exit 0
