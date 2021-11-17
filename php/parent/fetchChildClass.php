<?php
header('Access-control-Allow-Origin: *');
include_once("connect.php");

$childId = 39;
$sql = "SELECT className FROM child WHERE childID = $childId;";
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