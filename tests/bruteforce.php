<?php
	$next = null;
	if(isset($_GET['next']) && !empty($_GET['next'])){
		$next = $_GET['next'];
	}
	header("Content-Type: application/javascript");
	$message = "{'token':'SuperSecretToken'}";
	if($next == null){
		echo "{}";
	}else{
		echo "$next($message)";
	}
?>