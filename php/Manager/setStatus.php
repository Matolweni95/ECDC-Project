<?php

include_once("database.php");
$postdata = file_get_contents("php://input");



$id = $_GET['id'];
echo $_GET['id'];

$sql = "UPDATE parent_child_application
SET Application_status='Accepted' WHERE ApplicationID='$id'";
if ($mysqli->query($sql) === TRUE) {
echo "ok";
}else{
    echo "fail";
}


?>