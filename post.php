<?php
session_start();
if(isset($_SESSION['name'])){
	$text = $_POST['text'];

	$fp = fopen("log.html", 'a');
	fwrite($fp, "<div class='msgln'>(".date("g:i a").") <b>".$_SESSION['name']."</b>: ".stripslashes(htmlspecialchars($text))."</div>");
	fclose($fp);
}
?>