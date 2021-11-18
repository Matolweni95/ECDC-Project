<?php

include_once("database.php");

$id = $_GET['id'];
echo $_GET['id'];

$sql = "UPDATE child, parent
SET child.parentId = parent.parentId WHERE parent.applicationId=child.ApplicationID";
if ($mysqli->query($sql) === TRUE) {
echo "ok";
}else{
    echo "fail";
}


?>