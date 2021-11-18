<?php

include_once("database.php");
$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata))
{
$request = json_decode($postdata);
$amount = trim($request->amount);
$centre = mysqli_real_escape_string($mysqli, trim($request->centre));

$sql = "INSERT INTO requests(amount,centreId) VALUES ('$amount','$centre')";
if ($mysqli->query($sql) === TRUE) {
$authdata = [
'amount' => $amount,
'centre' => $centre,
'Id' => mysqli_insert_id($mysqli)
];
echo json_encode($authdata);
}
}

?>