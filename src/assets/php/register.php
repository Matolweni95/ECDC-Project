<?php

include_once("database.php");
$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata))
{
$request = json_decode($postdata);
$name = trim($request->name);
$surname = mysqli_real_escape_string($mysqli, trim($request->surname));
$email = mysqli_real_escape_string($mysqli, trim($request->email));
$guardian = mysqli_real_escape_string($mysqli, trim($request->guardian));
$diet = mysqli_real_escape_string($mysqli, trim($request->diet));
$sql = "INSERT INTO test(Name,Surname,Email,Guardian,Options) VALUES ('$name','$surname','$email','$guardian','$diet')";
if ($mysqli->query($sql) === TRUE) {
$authdata = [
'name' => $name,
'surname' => '',
'email' => $email,
'guardian' => $guardian,
'diet' => $diet,
'Id' => mysqli_insert_id($mysqli)
];
echo json_encode($authdata);
}
}

?>