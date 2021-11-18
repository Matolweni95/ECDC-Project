
<?php

include_once("database.php");
$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata))
{
$request = json_decode($postdata);
$classname = trim($request->classname);
$tid = mysqli_real_escape_string($mysqli, trim($request->tid));

$sql = "UPDATE teacher SET className = '$classname' WHERE teacherId = '$tid'";
if ($mysqli->query($sql) === TRUE) {
$authdata = [
'classname' => $classname,
'tid' => $tid,
'Id' => mysqli_insert_id($mysqli)
];
echo json_encode($authdata);
}
}

?>