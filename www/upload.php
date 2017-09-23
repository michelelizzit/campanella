<?php
/*
 *      upload.php
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

require('definitions.php');


if(isset($_POST['action']) and $_POST['action'] == "upload")
{
    if(isset($_FILES['user_file']))
    {
        $file = $_FILES['user_file'];
        echo "<pre>Uploading... \n Errors" . $file['error'] . "</pre>";
        if($file['error'] == UPLOAD_ERR_OK and is_uploaded_file($file['tmp_name']))
        {
            move_uploaded_file($file['tmp_name'], $SOUNDFILE_UPLOAD_DIR . $file['name']);
            echo "<pre>Uploaded</pre>";
        }
        else if($file['error'] == UPLOAD_ERR_INI_SIZE)
        {
        	echo "<pre>Errore il file eccede la dimensione specificata nel file php.ini (20M)</pre>";
        }
        else if($file['error'] == UPLOAD_ERR_NO_FILE)
        {
        	echo "<pre>Errore: il file selezionato non esiste (o non hai selezionato alcun file)</pre>";
        }
    }
}

?>

<html>
    <head>
        <?php echo file_get_contents('head.html'); ?>
    </head>
    <body>
<div id="wrapper">

	<?php echo file_get_contents('header_div.html'); ?>

	<div id="sidebar">
		<ul>
		<li><a href="index.php" class="sidebarHome"></a></li>
		<li><a href="settings.php" class="sidebarSettings"></a></li>
		<li><a href="status.php" class="sidebarStatus"></a></li>
		<li><a href="credits.php" class="sidebarCredits"></a></li>
		<?php echo file_get_contents('language_selector.html'); ?>
	</div>

		<div id="main">
			<span id="title" class="uploadTitle"></span>
			<br>
			<span class="uploadInfo">
			</span>
			</br>
			<br>
        <form method="post" action="upload.php" enctype="multipart/form-data">
            <input type="hidden" name="action" value="upload" />
            <label class="uploadLabel"></label>
            <input type="file" name="user_file" />
            <br />
            <input type="submit" value="" class="uploadText"/>
	    <input type="submit" formaction="scegli_suono.php" class="textBack">
        </form>
       	</div>
    </body>
</html>
