<?php

include_once("database.php");
$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata))
{
$request = json_decode($postdata);

$title = mysqli_real_escape_string($mysqli, trim($request->title));
$desc = mysqli_real_escape_string($mysqli, trim($request->desc));
$dest = mysqli_real_escape_string($mysqli, trim($request->dest));



$sql = "INSERT INTO notifications (title,message, role) VALUES ('$title','$desc', '$dest')";
if ($mysqli->query($sql) === TRUE) {
$authdata = [
'title' => $title,
'desc' => $desc,
'dest' => $dest,
'Id' => mysqli_insert_id($mysqli)
];
echo json_encode($authdata);
}
}

?>