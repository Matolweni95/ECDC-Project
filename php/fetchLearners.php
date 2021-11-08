<?php 
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Credentials: true');
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header("Content-Type: application/json; charset=UTF-8");
include_once("connect.php");

	$id = $_GET['id'];

	$parentId = id;
	$sql =  "SELECT * FROM child WHERE parentId = '$parentId'";
	$result = $conn->query($sql);
	$myArr = array();

	if ($result->num_rows > 0){
		while($row = $result->fetch_assoc()){
		$myArr[] = $row;
		}
	} else{
		echo "0 results";
	}

	$myJSON = json_encode($myArr);
	echo $myJSON;
?>



