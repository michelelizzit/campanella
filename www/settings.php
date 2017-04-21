<?php
/*
 *      settings.php
 *
 *      This file if part of the "campanella" bell management system
 *      For more information on the software please visit:
 *      https://lizzit.it/campanella
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
$error = 0;
$url = "/update_settings.php";
$xx = 0;
$handle = fopen("/opt/campanella/OPTIONS.txt", "r");
while (($line = fgets($handle)) !== false) {
        if (substr( $line, 0, 1 ) !== "#") {
        	$options[$xx] = $line;
        	$xx = $xx + 1;
        }
}

if (isset($_POST['enable']) && isset($_POST['orari']) && isset($_POST['ntp_update_time']) && isset($_POST['ntp_server']) && isset($_POST['volume'])) { 

	$lines = 8 + substr_count($_POST['orari'],"\n") + 2;

	if (isset($_POST['squilla_ora'])) {
		$squilla_ora = 1;
	}
	else {
		$squilla_ora = 0;
	}
	if (isset($_POST['NTP_ora'])) {
		$update_ntp_now = 1;
	}
	else {
		$update_ntp_now = 0;
	}
	
	$options_string = "#le righe che iniziano con # vengono scartate\n"
 . $lines . "
#enable\n"
 . $_POST['enable'] . 
"\n#track duratin in seconds
1
#volume
" . $_POST['volume'] . "
#ntp server
" . $_POST['ntp_server'] . "
#ntp update time
" . $_POST['ntp_update_time'] . "
#update ntp now\n"
 . $update_ntp_now . 
"\n#NON MODIFICARE QUESTO COMMENTO squilla ora\n"
 . $squilla_ora . 
"\n#num_options includendo questa
9
" . $_POST['orari'];
	
    file_put_contents("/opt/campanella/OPTIONS.txt", $options_string);

    header(sprintf('Location: %s', $url));
    printf('<a href="%s">Moved</a>.', htmlspecialchars($url));
    //exec('/usr/bin/sudo /opt/campanella/reboot_daemon.sh', $prova);
    exec('/usr/bin/sudo /opt/campanella/reboot_daemon.sh > /dev/null', $prova);
    echo "<pre>Done</pre>";
    exit();
}
else if (isset($_POST['enable']) || isset($_POST['orari']) || isset($_POST['ntp_update_time']) || isset($_POST['ntp_server']) || isset($_POST['update_ntp']) || isset($_POST['volume'])) {
	$error = 1;
}


?>

<!doctype html>
<html>
<head>
	<style>
		textarea {
			overflow: hidden;
		}
	</style>
	<?php echo file_get_contents('head.html'); ?>
	
</head>
<body>

	<div id="wrapper">

		<?php echo file_get_contents('header_div.html'); ?>

		<div id="sidebar"> 
			<ul>
			<li ><a href="index.php">Home</a></li>

			<li class="thispageSettings"><a class="thispageSettings" href="settings.php"> Settings</a></li><br>

			<li>
			<a href="status.php">Status</a>
			</li>
			<li><a href="credits.php">Credits / Info</a></li>
		</div>
		<div id="main" style="width:540px;"> <p> <span id="title">Modifica le impostazioni: </span></p>
			<?php 
			if ($error == 1) {
				echo '		<script language="javascript" type="text/javascript"> alert("Hai compilato male il form")</script>';
			}
			?>

			<form method="post" onsubmit="return confirm('Aggiornare le impostazioni?')">
				<h4>Enable/Disable campanella</h4>
					<input type="radio" name="enable" value="1" <?php if ($options[1] == 1) { echo "checked=\"checked\""; } ?>> Enabled</input>
					<input type="radio" name="enable" value="0" <?php if ($options[1] == 0) { echo "checked=\"checked\""; } ?>> Disabled</input>
				<br>
				<h4>Orari</h4>
				<textarea name="orari" rows=5><?php
				
				$xx = $options[8] - 1; 
				while($xx < count($options)) { 
				$xx = $xx + 1; 
				echo $options[$xx];
				} ?></textarea>
				<br>
				<h4>Ora in cui sincronizzare il server ntp nel formato hh:mm:ss</h4>
				<h5><input type="text" name="ntp_update_time" value="<?php echo $options[5]; ?>"></h5>
				<h4>Server NTP</h4>
				<h5><input type="text" name="ntp_server" value="<?php echo $options[4]; ?>"></h5>
				<h4>Volume (da -100 a 4)</h4>
				<h5><input type="text" name="volume" value="<?php echo $options[3]; ?>"></h5>

				<h4><input type="checkbox" name="squilla_ora" value="squilla_ora"/> Suona campanella ORA</h4>
				<h4><input type="checkbox" name="NTP_ora" value="NTP_ora"/> Aggiorna NTP ORA</h4>
				<br>
				<br>
                				<a href="scegli_suono.php" class="invia">
				Imposta suono
				</a>
                <br>
                <br>
				<input class="invia" type="reset" value="Reset"> 
				<input class="invia" type="submit" value="Aggiorna impostazioni"> 
				
			</form>
			<br>
			<br>
			
		</div>
		
		<div id="help">
			
            <span class="help-title"> Help </span>
<ul class="help">
<li>
</br>
</br>
</br>
Disabilita o abilita la campanella.</br>
<i>Default: enabled</i>
</br>
</br>
</br>
</br>
</br>
</br>
Inserisci gli orari a cui fare suonare la campanella
Scrivere l'ora nel formato aaaa-MM-gg hh:mm:ss oppure w hh:mm:ss dove w è compreso tra 1 e 7, ed indica il giorno della settimana (es 1 = lunedì) oppure nel formato hh:mm:ss per fare squillare la campanella ogni giorno.
</br>
</br>
</br>
</br>
</br>
</br>
</br>
</br>
</br>
</br>
</br>
</br>
<b>
Inserisci l'ora in cui il raspberry pi deve sincronizzare l'orologio interno con il server NTP</br>
NOTA:</br>
questa procedura richiede 35 secondi durente il quale la campanella viene temporaneamente disabilitata.</br>
In caso di mancanza di connessione a internet o in caso di errato indirizzo NTP la sincronizzazione fallisce e NON viene riportato alcun errore nella pagina status</br>
</b>
È consigliato impostare l'ora di notte</br>
<i>Default: 02:00:00</i>
</br>
</br>
</br>
</br>
Il server NTP con cui sincronizzare l'ora
</br>
Il server consigliato è ntp1.inrim.it del Laboratorio di Tempo e Frequenza Campione.
</br>
Default: ntp1.inrim.it
</br>
</br>
</br>
</br>
Il volume della campanella<br>
Max: 4         Min: -100
</br>
<b>
NOTA:
</br>
Il volume è espresso in dB, per questo è logaritmico
</br>
</b>

<i>Default: 4</i>
</br>
</br>
Seleziona per suonare la campanella ora
</br>
</br>
Seleziona per sincronizzare ora l'orologio interno con il server NTP
</br>
</br>
</br>
</br>
</li>
<li></li>
</ul>
			
			
		</div>
	</div>

</body>
</html>
