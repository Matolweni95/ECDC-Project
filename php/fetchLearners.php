<?php 
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Credentials: true');
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header("Content-Type: application/json; charset=UTF-8");
include_once("database.php");
	$parentId = 1;
	$sql =  mysqli_query($mysqli, "SELECT * FROM child WHERE parentId = '$parentId'");
 	$result = mysqli_fetch_array($sql);

	$myJSON = json_encode($result);
	echo $myJSON;
?>