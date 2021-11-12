<?php

include_once("database.php");
$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata))
{
$request = json_decode($postdata);

$name = mysqli_real_escape_string($mysqli, trim($request->name));
$cellno = mysqli_real_escape_string($mysqli, trim($request->cellno));
$message = mysqli_real_escape_string($mysqli, trim($request->message));
$email = mysqli_real_escape_string($mysqli, trim($request->email));


$sql = "INSERT INTO contactus (fullName,cellNo, email, text) VALUES ('$name','$cellno', '$email', '$message')";
if ($mysqli->query($sql) === TRUE) {
$authdata = [
'name' => $name,
'cellno' => $cellno,
'message' => $message,
'email' => $email,
'Id' => mysqli_insert_id($mysqli)
];
echo json_encode($authdata);
}
}

?>