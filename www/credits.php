<?php
/*
 *      credits.php
 *
 *		This file if part of the "campanella" bell management system
 *		For more information on the software please visit:
 *		https://lizzit.it/campanella
 *
 *      Written by: Michele Lizzit <michele@lizzit.it>, 20 Mar 2014
 *      Last update: 25 Apr 2016
 *      Version: 1.2
 *
 *      Copyright (c) 2016 Michele Lizzit
 *      
 *      This program is free software: you can redistribute it and/or modify
 *      it under the terms of the GNU Affero General Public License as published
 *      by the Free Software Foundation, either version 3 of the License, or
 *      (at your option) any later version.
 *    
 *      This program is distributed in the hope that it will be useful,
 *      but WITHOUT ANY WARRANTY; without even the implied warranty of
 *      MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *      GNU Affero General Public License for more details.
 *    
 *      You should have received a copy of the GNU Affero General Public License
 *      along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
?>

<?php
header('Expires: Sun, 01 Jan 2014 00:00:00 GMT');
header('Cache-Control: no-store, no-cache, must-revalidate');
header('Cache-Control: post-check=0, pre-check=0', FALSE);
header('Pragma: no-cache');
?>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Frameset//IT" "http://www.w3.org/TR/html4/frameset.dtd">
<html>
<head>
	<?php echo file_get_contents('head.html'); ?>
</head>
<body>
	<div id="wrapper">

		<?php echo file_get_contents('header_div.html'); ?>	

		<div id="sidebar"> 
			<ul>
			<li><a href="index.php">Home</a></li>
			<li><a href="settings.php">Settings</a></li>
			<li><a href="status.php">Status</a></li>
			<li class="thispage"><a class="thispage" href="credits.php">Credits / Info</a></li>
			<br>
		</div>

		<div id="main" style="width: 70%"><p> <span id="title">Presentazione del progetto: </span>
				<br><br>
				Il programma Python è stato scritto da<strong> Michele Lizzit.</strong><br>
				Il CSS è stato scritto da <strong>Daniele Toppano e Marco Ferrari.</strong><br>
				L'HTML è stato scritto da <strong>Michele Lizzit e Daniele Toppano.</strong><br>
				Il PHP è stato scritto da <strong>Michele Lizzit.</strong><br>
				Il logo "CopernicoDrin" è stato creato da <strong>Marco Ferrari.</strong><br>
				Il software per il controllo dell'LCD è stato scritto da <strong>Michele Lizzit.</strong><br><br>
				Michele Lizzit<br> <i>michele@lizzit.it - <a href="https://lizzit.it">lizzit.it</a></i><br>
				Daniele Toppano <br><i>danitoppano@gmail.com</i><br>
				Marco Ferrari <br><i>marcogio99@gmail.com</i><br>
				<br>
				Il computer che gestisce la campanella e il server è un Raspberry PI modello B con Raspbian<br>
				Il software è scritto in PHP e Python<br>
				Il display LCD è gestito da una scheda Arduino UNO che legge i dati, tramite seriale, dal RaspberryPi<br>
				Ultima modifica del software 26/04/2016<br>
				<br>
				Il software è rilasciato in licenza GNU AGPLv3, il sorgente è gratuitamente scaricabile da <a href="https://lizzit.it/campanella">lizzit.it/campanella</a>
			</p>
			<br>
			<br>


		</div>
		
		
		
	</div>
</body>
</html>
