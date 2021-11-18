<?php header('Access-Control-Allow-Origin: *');
include_once("connect.php");

$id = $_GET['id'];

$sql = "INSERT INTO users (name, surname, password, role, email)
SELECT parentName, parentSurname,secretkey, type, parentEmailAddress  FROM parent_child_application
WHERE parent_child_application.ApplicationID = '$id'";


$result = $conn->query($sql);



?>