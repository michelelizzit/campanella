/*
 *      script.js
 *
 *      This file if part of the "campanella" bell management system
 *      For more information on the software please visit:
 *      https://lizzit.it/campanella
 *
 *      Written by: Michele Lizzit <michele@lizzit.it>, 23 Sept 2017
 *      Last update: 24 Sept 2017
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

function setCookieLang(cookieValue) {
	var expireTime = new Date();
	var cookieName = "lang";

	expireTime.setTime((new Date()).getTime() + 3600000*24*365);
	document.cookie = cookieName + "=" + escape(cookieValue) + ";expires=" + expireTime.toGMTString();
}

function getCookieLang() {

	var cname = "lang";
	var name = cname + "=";
	var decodedCookie = decodeURIComponent(document.cookie);
	var ca = decodedCookie.split(';');
	for(var i = 0; i <ca.length; i++) {
		var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return null;
}

var lang;
var selectedLanguage;
function getLanguage(langName) {
	var langStrings = null;
	var langFile = null;
	switch (langName) {
		case "english":
			langFile = "/lang/en.js";
			if (typeof langEN == "undefined") break;
			langStrings = langEN;
			break;
		case "italian":
			langFile = "/lang/it.js";
			if (typeof langIT == "undefined") break;
			langStrings = langIT;
			break;
		case "dutch":
			langFile = "/lang/nl.js";
			if (typeof langNL == "undefined") break;
			langStrings = langNL;
			break;
		default:
			return null;
	}

	if (langStrings != null) return langStrings;

	jQuery.getScript(langFile, function() {
		applyLanguage();
	});
	return null;
}
function applyLanguage() {
	lang = getLanguage(selectedLanguage);
	if (lang == null) return;

	$(".header").html(lang.header);
	$(".languageText").html(lang.languageText);
	$(".sidebarSettings").html(lang.settings);
	$(".sidebarStatus").html(lang.status);
	$(".sidebarHome").html(lang.home);
	$(".sidebarCredits").html(lang.credits);
	$(".projectDescription").html(lang.projectDescription);
	$(".quickstart").val(lang.quickguide);
	$(".quickstartContent").html(lang.quickguideContent);
	$(".helpText").html(lang.helpText);
	$(".help-title").html(lang.helpTitle);
	$(".creditsTitle").html(lang.creditsTitle);
	$(".creditsText").html(lang.creditsText);
	$(".settingsTitle").html(lang.settingsTitle);
	$(".settingsReset").val(lang.settingsReset);
	$(".settingsUpdate").val(lang.settingsUpdate);
	$(".settingsSound").html(lang.settingsSound);
	$(".settingsRingNow").html(lang.settingsRingNow);
	$(".settingsVolume").html(lang.settingsVolume);
	$(".settingsTime").html(lang.settingsTime);
	$(".settingsNTP").html(lang.settingsNTP);
	$(".settingsNTPnow").html(lang.settingsNTPnow);
	$(".settingsEnable").html(lang.settingsEnable);
	$(".settingsEnabledText").html(lang.settingsEnabledText);
	$(".settingsDisabledText").html(lang.settingsDisabledText);
	$(".settingsTimetable").html(lang.settingsTimetable);
	$(".statusServer").html(lang.statusServer);
	$(".statusUSB").html(lang.statusUSB);
	$(".statusSDspace").html(lang.statusSDspace);
	$(".statusSD").html(lang.statusSD);
	$(".statusRAM").html(lang.statusRAM);
	$(".statusOptions").html(lang.statusOptions);
	$(".statusErrors").html(lang.statusErrors);
	$(".statusNetwork").html(lang.statusNetwork);
	$(".statusTitle").html(lang.statusTitle);
	$(".usbStatus").html(lang.usbStatus);
	$(".textBack").val(lang.textBack);
	$(".guideContent").html(lang.guideContent);
	$(".guideTitle").html(lang.guideTitle);
	$(".uploadText").val(lang.uploadText);
	$(".updateSettings").val(lang.updateSettings);
	$(".uploadTitle").html(lang.uploadTitle);
	$(".uploadInfo").html(lang.uploadInfo);
	$(".uploadLabel").html(lang.uploadLabel);
	$(".updateTitle").html(lang.updateTitle);
	$(".updateSystemReboot").html(lang.updateSystemReboot);
	$(".updateDone").html(lang.updateDone);
	$(".homeText").val(lang.homeText);
	$(".title404").html(lang.title404);
	$(".text404").html(lang.text404);
	$(".selectSoundDeleteAllButton").val(lang.selectSoundDeleteAllButton);
	$(".selectSoundUpload").val(lang.selectSoundUpload);
	$(".selectSoundDeleteButton").val(lang.selectSoundDeleteButton);
	$(".selectSoundTitle").html(lang.selectSoundTitle);
	$(".selectSoundInfo").html(lang.selectSoundInfo);
	$(".selectSoundDelete").html(lang.selectSoundDelete);
	$(".selectSoundSetInfo").html(lang.selectSoundSetInfo);
	$(".selectSoundSetButton").val(lang.selectSoundSetButton);
}
$(document).ready(function() {
	selectedLanguage = getCookieLang();
	if (selectedLanguage == null) {
		selectedLanguage = "english";
		setCookieLang(selectedLanguage);
	}
	$(".language select").val(selectedLanguage);
	applyLanguage();

	$(".language select").change(function() {
		selectedLanguage = this.value;
		setCookieLang(selectedLanguage);
		applyLanguage();
	});
});
