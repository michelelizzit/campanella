var langNL = {
	greeting: "Hallo",
	title: "Titel",
	header: "Campanella - Schoolbel managementsysteem",
	languageText: "Taal:",
	settings: "Instellingen",
	status: "Status",
	home: "Home",
	credits: "Credits / Info",
	projectDescription: "Campanella projectbeschrijving ",
	quickguide: "Campanella handleiding",
	quickguideContent: "\
	<strong> Campanella </strong> is een open-source schoolbel managementsysteem dat ontworpen is voor scholen. <br>\
	Je kunt via een gebruiksvriendelijke webinterface de schoolbel automatiseren. <br>\
	Tevens kun je de schoolbel gewoon met de hand bedienen door een externe schakelaar aan te sluiten. <br>\
	Je hoeft alleen een luidspreker of een klassieke schoolbel aan de Raspberry Pi aan te sluiten en je bent klaar! <br>\
	Het beheer is erg gemakkelijk: alle schoolbellen zullen tegelijkertijd luiden en in een paar seconden kunt het tijdschema aanpassen. <br>\
	De software is zeer veelzijdig en je kunt verschillende tijdschemas maken : dagelijks, wekelijks, maandelijks of wat je maar wilt. <br>\
	De software synchroniseert automatisch de interne klok met een externe atoomklok met behulp van het NetworkTimeProtocol. <br>\
	De software is ontworpen voor scholen, maar is ook geschikt voor andere toepassingen! <br>\
		",
	updateSettings: "Instellingen aanpassen?",
	helpText: "\
	<li>\
	</br>\
	</br>\
	</br>\
	Schakel de bel in of uit.</br>\
	<i>Standaard: ingeschakeld</i>\
	</br>\
	</br>\
	</br>\
	</br>\
	</br>\
	</br>\
	Voer het tijdschema in voor de schoolbel.\
	Vul de tijd in het volgende formaat: jjjj-mm-dd uu:mm:ss of d uu:mm:ss waarbij d tussen de 1 en 7 mag zijn en geeft de dag van de week aan (bijv. 1 = maandag) of vul alleen uu:mm:ss in dan luidt de schoolbel elke dag.\
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
	Voer de tijd in waarop de Raspberry PI de interne klok synchroniseert met de NTP-server</br>\
	OPMERKING:</br>\
	deze procedure duurt 35 seconden waardoor de schoolbel tijdelijk uitgeschakeld is.</br>\
	Als er geen internet verbinding is of in het geval van een verkeerd NTP-adres, dan mislukt de synchronisatie en wordt er GEEN fout op de statuspagina weergegeven!</br>\
	</b>\
	Het is aan te raden om de tijd ergens in de nacht te laten synchroniseren.</br>\
	<i>Standaard: 02:00:00</i>\
	</br>\
	</br>\
	</br>\
	</br>\
	De het adres van de NTP-server waarmee de tijd kan worden gesynchroniseerd\
	</br>\
	Het wordt aanbevolen om de NTP-server ntp1.inrim.it te gebruiken \
	</br>\
	Standaardt: ntp1.inrim.it\
	</br>\
	</br>\
	</br>\
	</br>\
	Het volume van de schoolbel<br>\
	Max: 4         Min: -100\
	</br>\
	<b>\
	</br>\
	</br>\
	</br>\
	</b>\
\
	<i>Standaard: 4</i>\
	</br>\
	</br>\
	Selecteer om de schoolbel nu direct te luiden!\
	</br>\
	</br>\
	Selecteer om de interne klok nu direct te synchroniseren met de NTP-server\
	</br>\
	</br>\
	</br>\
	</br>\
	</li>\
	<li></li>\
	",
	helpTitle: " Help ",
	creditsTitle: "Credits: ",
	creditsText: "\
	<br><br>\
	Het Python programma is geschreven door <strong> Michele Lizzit. </ Strong> <br> \
    De CSS is geschreven door <strong> Daniele Toppano en Marco Ferrari. </ Strong> <br> \
    HTML is geschreven door <strong> Michele Lizzit en Daniele Toppano. </ Strong> <br> \
    PHP is geschreven door <strong> Michele Lizzit. </ Strong> <br> \
    Het logo \"CopernicoDrin \" is gemaakt door <strong> Marco Ferrari. </ Strong> <br> \
    De software voor het besturen van het LCD-scherm is geschreven door <strong> Michele Lizzit. </ Strong> <br> <br> \
    Michele Lizzit <br> <i> michele@lizzit.it - ​​<a href=\"https://lizzit.it\"> lizzit.it </a> </ i> <br> \
    Daniele Toppano <br> <i> danitoppano@gmail.com </ i> <br> \
    Marco Ferrari <br> <i> marcogio99@gmail.com </ i> <br> \
    Dries Gankema <br> <i> a.j.gankema@rug.nl </ i> - Nederlandse vertaling <br>\
    <br> \
	De Raspberry PI Model B met Raspbian is de server en bestuurt de klok<br> \
    De software is geschreven in PHP en Python <br> \
    Het LCD-scherm wordt bestuurt door een Arduino UNO die de data via een seriële verbinding krijgt van de Raspberry Pi <br> \
    Laatste wijziging van de software 26/04/2016<br>\
	<br>\
	De software is gelicenseerd onder GNU AGPLv3, de sourcode is gratis te downloaden vanaf <a href=\"https://lizzit.it/campanella\">lizzit.it/campanella</a>\
	",
	settingsTitle: "Instellingen aanpassen",
	settingsReset: "Reset",
	settingsUpdate: "Instellingen bijwerken",
	settingsRingNow: "Schoolbel NU LUIDEN",
	settingsVolume: "Geluidsterkte (tussen -100 en 4)",
	settingsTime: "Synchroniseer de NTP-server volgens het formaat uu:mm:ss",
	settingsNTP: "Server NTP",
	settingsSound: "Geluid instellen",
	settingsNTPnow: "Update NU NTP",
	settingsEnable: "Inschakelen/Uitschakelen Campanella",
	settingsEnabledText: "Inschakelen",
	settingsDisabledText: "Uitschakelen",
	settingsTimetable: "Tijdschema",
	statusServer: "Server status informatie",
	statusUSB: "Controleer USB poorten",
	statusSDspace: "Gebruikte ruimte op de SD-kaart:",
	statusSD: "SD geheugen:",
	statusRAM: "RAM:",
	statusOptions: "Inhoud van het bestand OPTIONS.txt",
	statusErrors: "Foutmelding server",
	statusNetwork: "Netwerkstatus",
	statusTitle: "Systeemstatus: ",
	rebootConfirm: "Weet u zeker dat u het systeem opnieuw wilt opstarten / uitschakelen?",
	usbStatus: "Server USB status informatie",
	textBack: "Terug",
	guideTitle: "Campanella projectbeschrijving: ",
	guideContent: "\
	De software is geschikt voor een Raspberry PI Model A of B of een Linux-computer. <br> \
    Voor meer informatie over de software kunt u vinden op:\
	<a href=\"https://lizzit.it/campanella\">https://lizzit.it/campanella</a>\
	",
	uploadText: "Upload",
	updateSettings: "Instellingen",
	uploadTitle: "Een nieuw geluidsbestand op de server installeren:  ",
	uploadInfo: "Opmerking: Alleen .wav kunnen worden gebruikt",
	uploadLabel: "Upload uw bestand:",
	updateTitle: "Bijwerken instellingen:",
	updateSystemReboot: "Even geduld, het systeem zal opnieuw opstarten,",
	updateDone: "Het systeem functioneert goed.",
	homeText: "Home",
	title404: "404 Not Found: ",
	text404: "Het bestand bestaat niet op de server",
	selectSoundDeleteAllButton: "Wis alle geluidsbestanden",
	selectSoundSetButton: "Stel het geluid in",
	selectSoundUpload: "Upload een nieuw geluidsbestand op de server",
	selectSoundDeleteButton: "Het geselecteerde geluid wissen",
	selectSoundTitle: "Geluidsbeheerpaneel",
	selectSoundInfo: "Hier kunt u het geluid dat wordt afgespeeld instellen.",
	selectSoundDelete: "Wis een geluid in het systeem",
	selectSoundSetInfo: "Stel het geluid in"
};
