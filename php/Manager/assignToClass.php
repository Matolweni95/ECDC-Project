<?php

include_once("database.php");
$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata))
{
$request = json_decode($postdata);
$tid = mysqli_real_escape_string($mysqli, trim($request->tid));
$classname = mysqli_real_escape_string($mysqli, trim($request->classname));
$venue = mysqli_real_escape_string($mysqli, trim($request->venue));
$desc = mysqli_real_escape_string($mysqli, trim($request->desc));
$sql = "INSERT INTO class(className,venue,teacherId, description) VALUES ('$classname','$venue','$tid', '$desc')";
if ($mysqli->query($sql) === TRUE) {
$authdata = [
'classname' => $classname,
'venue' => $venue,
'tid' => $tid,
'desc' => $desc,
'Id' => mysqli_insert_id($mysqli)
];
echo json_encode($authdata);
}
else {
    echo 'fail';
}
}

?>