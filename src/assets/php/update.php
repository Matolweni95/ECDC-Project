<?php

include_once("database.php");
$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata))
{
$request = json_decode($postdata);
$name = trim($request->name);
$surname = mysqli_real_escape_string($mysqli, trim($request->surname));
$email = mysqli_real_escape_string($mysqli, trim($request->email));
$cellno =  mysqli_real_escape_string($mysqli, trim($request->cellno));
$line1 =  mysqli_real_escape_string($mysqli, trim($request->line1));
$line2 =  mysqli_real_escape_string($mysqli, trim($request->line2));
$city =  mysqli_real_escape_string($mysqli, trim($request->city));
$zip =  mysqli_real_escape_string($mysqli, trim($request->zip));

$sql = "UPDATE manager
SET firstName='$name', surname='$surname', cellNo='$cellno', emailAddress = '$email', line1Address='$line1', line2Address='$line2', City='$city',zip='$zip' WHERE managerID=1";;
if ($mysqli->query($sql) === TRUE) {
$authdata = [
'name' => $name,
'surname' => $surname,
'email' => $email,
'cellno' => $cellno,
'city' => $city,
'line1' => $line1,
'line2' => $line2,
'zip' => $zip,
'Id' => mysqli_insert_id($mysqli)
];
echo json_encode($authdata);
}
}

?>