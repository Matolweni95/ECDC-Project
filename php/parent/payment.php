<?php

include_once("database.php");
$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata))
{
$request = json_decode($postdata);
$firsName = trim($request->firstName);
$lastName = mysqli_real_escape_string($mysqli, trim($request->lastName));
$nameOnCard = mysqli_real_escape_string($mysqli, trim($request->nameOnCard));
$cardNo =  mysqli_real_escape_string($mysqli, trim($request->cardNo));
$expiryDate =  mysqli_real_escape_string($mysqli, trim($request->expiryDate));
$cvv =  mysqli_real_escape_string($mysqli, trim($request->cvv));

$sql = "INSERT(firstName, lastName,paymentOption,nameOnCard, cardNo,expiryDate, cvv) into parentPayment
Values ('$firsName', '$lastName', '$paymentOption','$nameOnCard', '$cardNo','$expiryDate','$cvv')";
if ($mysqli->query($sql) === TRUE) {
$authdata = [
'firstName' => $firsName,
'lastName' => $lastName,
'nameOnCard' => $nameOnCard,
'cardNo' => $cardNo,
'expiryDate' => $expiryDate,
'cvv' => $cvv,
'paymentOption' => mysqli_insert_id($mysqli)
];
echo json_encode($authdata);
}
}

?>