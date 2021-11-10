<?php

include_once("database.php");
$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata))
{
$request = json_decode($postdata);

$desc = mysqli_real_escape_string($mysqli, trim($request->desc));
$fees = mysqli_real_escape_string($mysqli, trim($request->fees));
$year = mysqli_real_escape_string($mysqli, trim($request->year));
$classes = mysqli_real_escape_string($mysqli, trim($request->classes));
$venue = mysqli_real_escape_string($mysqli, trim($request->venue));

$sql = "INSERT INTO class (className,venue, description, classFees, year) VALUES ('$classes','$venue', '$desc', '$fees','$year')";
if ($mysqli->query($sql) === TRUE) {
$authdata = [
'classes' => $classes,
'venue' => $venue,
'desc' => $desc,
'fees' => $fees,
'year' => $year,
'Id' => mysqli_insert_id($mysqli)
];
echo json_encode($authdata);
}
}

?>