<?php 
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Credentials: true');
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header("Content-Type: application/json; charset=UTF-8");
include_once("database.php");

	$sql =  mysqli_query($mysqli, "SELECT * FROM vacancies");
 	$result = mysqli_fetch_array($sql);

	$myJSON = json_encode($result);
	echo $myJSON;
?>