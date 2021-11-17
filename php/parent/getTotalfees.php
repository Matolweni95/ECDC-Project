<?php
header('Access-control-Allow-Origin: *');
include_once("connect.php");

$sql = "SELECT pbId, totalFees, balance_paid, totalFees-balance_Paid AS totalDue FROM payment_balance
;";
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