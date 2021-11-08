<?php

include_once("database.php");
$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata))
{
$request = json_decode($postdata);

$id = $_GET['id'];

$grade = mysqli_real_escape_string($mysqli, trim($request->grade));
$sql = "UPDATE teacher SET className = '$grade' WHERE (`teacherId` = '$id');";
if ($mysqli->query($sql) === TRUE) {
$authdata = [
'grade' => $grade,
'Id' => mysqli_insert_id($mysqli)
];
echo json_encode($authdata);
}
else {
    echo 'fail';
}
}

?>