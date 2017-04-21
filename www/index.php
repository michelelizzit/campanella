<?php
/*
 *      index.php
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
<body>
	<div id="wrapper">

		<?php echo file_get_contents('header_div.html'); ?>		

		<div id="sidebar"> 
			<ul>
			<li class="thispage"><a class="thispage" href="index.php">Home</a></li>
			<br>
			<li><a href="settings.php">Settings</a></li>
			<li><a href="status.php">Status</a></li>
			<li><a href="credits.php">Credits / Info</a></li>
		</div>

		<div id="main2"> <p> <span id="title">Presentazione del progetto: </span>
				<br><br>
				<center>
				<img src="logo3.png" class="titolo" alt="" width="230px"/>
				<br><br></br></br>
				<form action="/guide.php">
				<input type="submit" value="Guida all'utilizzo di Campanella"/>
				</form>
				</center>
				<br>
				<br>
				<strong>Campanella</strong> e' un’ apparecchiatura open-source pensata per le scuole che permette il controllo delle campanelle di un intero istituto.<br>
				Grazie a un'unica interfaccia, molto semplice da usare, si comanda un sistema di RaspberryPI connessi alla rete.<br>
				È sufficiente collegare delle casse audio o la classica campanella ed IL GIOCO E' FATTO!<br>
				L'utilizzo di un unico software rende molto agevole la gestione, infatti le campanelle della scuola suoneranno tutte in orario nello stesso istante e in caso di nuova scansione oraria saranno necessari pochi secondi per impostarla.<br>
				La versatilità del software permette una programmazione degli orari estremamente flessibile: giornaliera, settimanale, saltuaria o manuale.<br>
				Il Raspberry Pi sincronizza automaticamente ogni giorno, a un orario impostabile tramite l’interfaccia, l’orologio interno con un orologio atomico attraverso il NetworkTimeProtocol.<br>
				Inoltre il sistema si può considerare “environment friendly” in quanto consuma appena 2W.<br>
				<br>
				</br>
				<strong>Campanella</strong> is an open-source bell management system designed for schools.<br>
				It can control the bells of a school through the internet.<br>
				With user-friendly interface you can manage a system of RaspberryPi’s.<br>
				You have only to connect a loudspeaker or the classic school bell to the RaspberryPi and you are ready!<br>
				Using a single software for all the bells, the managing becomes very easy: all the school bells will ring at the same time and in a few seconds you will be able to change the timetable.<br>
				The software is very versatile and can plan different timetables: daily, weekly, monthly or whatever.<br>
				The software automatically syncronizes the internal clock with a remote atomic clock using the NetworkTimeProtocol.<br>
				The software is designed for schools but is suitable for a lot more applications!<br>
			</p>
			<br>
			<br>
			</br>

		</div>
	</div>
</body>
</html>
