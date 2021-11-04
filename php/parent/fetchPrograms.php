<?php
header('Access-control-Allow-Origin: *');
include_once("connect.php");
$childID = 1;
$sql = "SELECT packageName from child where childID = $childID";
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