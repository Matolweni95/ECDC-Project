<?php

include_once("database.php");
$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata))
{
$request = json_decode($postdata);
$firstName = mysqli_real_escape_string($mysqli, trim($request->firstName));
$lastName = mysqli_real_escape_string($mysqli, trim($request->lastName));
$paymentOption = mysqli_real_escape_string($mysqli, trim($request->paymentOption));
$nameOnCard = mysqli_real_escape_string($mysqli, trim($request->nameOnCard));
$cardNumber = mysqli_real_escape_string($mysqli, trim($request->cardNumber));
$expiryDate = mysqli_real_escape_string($mysqli, trim($request->expiryDate));
$cvv = mysqli_real_escape_string($mysqli, trim($request->cvv));


$sql = "INSERT INTO payment(firstName,lastName, paymentOption, nameOnCard, cardNumber, expiryDate, cvv) VALUES ('$firstName',
'$lastName', '$paymentOption','$nameOnCard','$cardNumber', '$expiryDate','$cvv')";
if ($mysqli->query($sql) === TRUE) {
$authdata = [
     'firstName' => $firstName,
     'lastName' => $lastName, 
     'paymentOption' => $paymentOption,
     'nameOnCard' => $nameOnCard, 
     'cardNumber' => $cardNumber, 
     'expiryDate' => $expiryDate, 
     'cvv' => $cvv,
     'Id' => mysqli_insert_id($mysqli)
];
echo json_encode($authdata);
}
}

?>