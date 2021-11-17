<?php header('Access-Control-Allow-Origin: *');
include_once("connect.php");

$id = $_GET['id'];
$id2 = $_GET['id2'];

$sql = "SELECT parentId FROM parent Where parentName = '$id' and parentSurname = '$id2'";
$result = $conn->query($sql);
$myArr = array();

if($result->num_rows > 0){

while( $row = $result->fetch_assoc()) {
	$myArr[] = $row;
}
} else {
	echo "0 results";

}

$myJSON = json_encode($myArr);
echo $myJSON;
?>