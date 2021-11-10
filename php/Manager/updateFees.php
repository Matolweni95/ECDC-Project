<?php

include_once("database.php");
$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata))
{
$request = json_decode($postdata);
$fees = trim($request->fees);
$desc = mysqli_real_escape_string($mysqli, trim($request->desc));
$classes = mysqli_real_escape_string($mysqli, trim($request->classes));
$venue = mysqli_real_escape_string($mysqli, trim($request->venue));
$id = mysqli_real_escape_string($mysqli, trim($request->id));

$sql = "UPDATE class SET className = '$classes', venue = '$venue', description = '$desc' WHERE classId = '$id'";

if ($mysqli->query($sql) === TRUE) {
$authdata = [
'classes' => $classes,
'fees' => $fees,
'venue' => $venue,
'Id' => mysqli_insert_id($mysqli)
];
echo json_encode($authdata);
}
}

?>