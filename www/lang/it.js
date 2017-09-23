var langIT = {
	greeting: "Ciao",
	title: "Titolo",
	header: "Campanella - Sistema di gestione delle campanelle",
	languageText: "Lingua:",
	settings: "Impostazioni",
	status: "Stato",
	home: "Home",
	credits: "Crediti / Info",
	projectDescription: "Presentazione del progetto: ",
	quickguide: "Guida all'utilizzo di Campanella",
	quickguideContent: "\
		<strong>Campanella</strong> e' un’ apparecchiatura open-source pensata per le scuole che permette il controllo delle campanelle di un intero istituto.<br>\
		<br>\
		Grazie a un'unica interfaccia, molto semplice da usare, si comanda un sistema di RaspberryPI connessi alla rete.<br>\
		È sufficiente collegare delle casse audio o la classica campanella ed IL GIOCO E' FATTO!<br>\
		L'utilizzo di un unico software rende molto agevole la gestione, infatti le campanelle della scuola suoneranno tutte in orario nello stesso istante e in caso di nuova scansione oraria saranno necessari pochi secondi per impostarla.<br>\
		La versatilità del software permette una programmazione degli orari estremamente flessibile: giornaliera, settimanale, saltuaria o manuale.<br>\
		Il Raspberry Pi sincronizza automaticamente ogni giorno, a un orario impostabile tramite l’interfaccia, l’orologio interno con un orologio atomico attraverso il NetworkTimeProtocol.<br>\
		Inoltre il sistema si può considerare “environment friendly” in quanto consuma appena 2W.<br>\
		",
	updateSettings: "Aggiornare le impostazioni?",
	helpText: "\
	<li>\
	</br>\
	</br>\
	</br>\
	Disabilita o abilita la campanella.</br>\
	<i>Default: abilita</i>\
	</br>\
	</br>\
	</br>\
	</br>\
	</br>\
	</br>\
	Inserisci gli orari a cui fare suonare la campanella\
	Scrivere l'ora nel formato aaaa-MM-gg hh:mm:ss oppure w hh:mm:ss dove w è compreso tra 1 e 7, ed indica il giorno della settimana (es 1 = lunedì) oppure nel formato hh:mm:ss per fare squillare la campanella ogni giorno.\
	</br>\
	</br>\
	</br>\
	</br>\
	</br>\
	</br>\
	</br>\
	</br>\
	</br>\
	</br>\
	</br>\
	</br>\
	<b>\
	Inserisci l'ora in cui il raspberry pi deve sincronizzare l'orologio interno con il server NTP</br>\
	NOTA:</br>\
	questa procedura richiede 35 secondi durente il quale la campanella viene temporaneamente disabilitata.</br>\
	In caso di mancanza di connessione a internet o in caso di errato indirizzo NTP la sincronizzazione fallisce e NON viene riportato alcun errore nella pagina status</br>\
	</b>\
	È consigliato impostare l'ora di notte</br>\
	<i>Default: 02:00:00</i>\
	</br>\
	</br>\
	</br>\
	</br>\
	Il server NTP con cui sincronizzare l'ora\
	</br>\
	Il server consigliato è ntp1.inrim.it del Laboratorio di Tempo e Frequenza Campione.\
	</br>\
	Default: ntp1.inrim.it\
	</br>\
	</br>\
	</br>\
	</br>\
	Il volume della campanella<br>\
	Max: 4         Min: -100\
	</br>\
	<b>\
	NOTA:\
	</br>\
	Il volume è espresso in dB, per questo è logaritmico\
	</br>\
	</b>\
\
	<i>Default: 4</i>\
	</br>\
	</br>\
	Seleziona per suonare la campanella ora\
	</br>\
	</br>\
	Seleziona per sincronizzare ora l'orologio interno con il server NTP\
	</br>\
	</br>\
	</br>\
	</br>\
	</li>\
	<li></li>\
	",
	helpTitle: "Aiuto ",
	creditsTitle: "Crediti: ",
	creditsText: "\
	<br><br>\
	Il programma Python è stato scritto da<strong> Michele Lizzit.</strong><br>\
	Il CSS è stato scritto da <strong>Daniele Toppano e Marco Ferrari.</strong><br>\
	L'HTML è stato scritto da <strong>Michele Lizzit e Daniele Toppano.</strong><br>\
	Il PHP è stato scritto da <strong>Michele Lizzit.</strong><br>\
	Il logo \"CopernicoDrin\" è stato creato da <strong>Marco Ferrari.</strong><br>\
	Il software per il controllo dell'LCD è stato scritto da <strong>Michele Lizzit.</strong><br><br>\
	Michele Lizzit<br> <i>michele@lizzit.it - <a href=\"https://lizzit.it\">lizzit.it</a></i><br>\
	Daniele Toppano <br><i>danitoppano@gmail.com</i><br>\
	Marco Ferrari <br><i>marcogio99@gmail.com</i><br>\
	<br>\
	Il computer che gestisce la campanella e il server è un Raspberry PI modello B con Raspbian<br>\
	Il software è scritto in PHP e Python<br>\
	Il display LCD è gestito da una scheda Arduino UNO che legge i dati, tramite seriale, dal RaspberryPi<br>\
	Ultima modifica del software 26/04/2016<br>\
	<br>\
	Il software è rilasciato in licenza GNU AGPLv3, il sorgente è gratuitamente scaricabile da <a href=\"https://lizzit.it/campanella\">lizzit.it/campanella</a>\
	",
	settingsTitle: "Modifica le impostazioni: ",
	settingsReset: "Reset",
	settingsUpdate: "Aggiorna impostazioni",
	settingsRingNow: "Suona campanella ORA",
	settingsVolume: "Volume (da -100 a 4)",
	settingsTime: "Ora in cui sincronizzare il server ntp nel formato hh:mm:ss",
	settingsNTP: "Server NTP",
	settingsSound: "Imposta suono",
	settingsNTPnow: "Aggiorna NTP ORA",
	settingsEnable: "Abilita/Disabilita campanella",
	settingsEnabledText: "Abilita",
	settingsDisabledText: "Disabilita",
	settingsTimetable: "Orari",
	statusServer: "Indicazioni sullo stato del server",
	statusUSB: "Stato delle porte USB",
	statusSDspace: "Spazio usato nella SD:",
	statusSD: "Memoria SD:",
	statusRAM: "RAM:",
	statusOptions: "Contenuto del file OPTIONS.txt",
	statusErrors: "Errori del server:",
	statusNetwork: "Stato della rete",
	statusTitle: "Stato del sistema: ",
	rebootConfirm: "Sei sicuro di voler riavviare/spegnere il sistema?",
	usbStatus: "Indicazioni sullo stato delle USB del server",
	textBack: "Indietro",
	guideTitle: "Presentazione del progetto: ",
	guideContent: "\
	Il software funziona su Raspberry PI Modello A o B e su qualunque macchina Linux.<br>\
	For more information on the software please visit:\
	<a href=\"https://lizzit.it/campanella\">https://lizzit.it/campanella</a>\
	",
	uploadText: "Carica",
	updateSettings: "Impostazioni",
	uploadTitle: "Carica un nuovo suono sul server: ",
	uploadInfo: "NOTA: sono accettati solo file .wav",
	uploadLabel: "Carica il tuo file:",
	updateTitle: "Aggiorna impostazioni: ",
	updateSystemReboot: "Il sistema verrà riavviato, attendi.",
	updateDone: "Il sistema è funzionante.",
	homeText: "Home",
	title404: "404 Pagina non trovata: ",
	text404: "Il file non e' presente in questo server",
	selectSoundDeleteAllButton: "Elimina tutti i suoni",
	selectSoundSetButton: "Imposta il suono",
	selectSoundUpload: "Carica un nuovo suono sul server",
	selectSoundDeleteButton: "Elimina suono selezionato",
	selectSoundTitle: "Pannello di gestione dei suoni",
	selectSoundInfo: "Qui puoi impostare il suono riprodotto dalle casse.",
	selectSoundDelete: "Elimina un suono in memoria",
	selectSoundSetInfo: "Imposta il suono"

};
