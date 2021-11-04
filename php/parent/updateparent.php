<?php
$applicationId = $_POST['applicationId'];

$sql = new mysqli ('sict-mysql.mandela.ac.za','grp12','grp12-2021','mountainviewdb');
//establish connection

 $mysqli = "UPDATE parent SET applicationId = '$applicationId' 
 where parent.application ='parent_child_application.applicationId'";
 

if($conn->query($sql) === TRUE) {
    echo "data inserted";

} else {
    echo "Error: ".$sql. "<br>". $conn ->error;
}
?>