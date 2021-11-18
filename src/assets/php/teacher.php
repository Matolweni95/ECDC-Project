<?php
$name = $_POST ["name"];
$surname = $_POST["surname"];
$emailAddress = $_POST["emailAddress"];
$ContactNo = $_POST["contactNo"];
$ImageUpload = $_FILES["ImageUpload"];

$sql = new mysqli ('sict-mysql.mandela.ac.za','grp12','grp12-2021','mountainviewdb');
//establish connection

 $mysqli = "INSERT into teacher_application (, name , surname, emailAddress, contactNo, imageUpload) 
 select ('$name', '$surname', '$emailAddress', '$contactNo', 
 '$ImageUpload')from teacher_application where teacher.applicationId = 'teacher_application.applicationId";
 

if($conn->query($sql) === TRUE) {
    echo "data inserted";

} else {
    echo "Error: ".$sql. "<br>". $conn ->error;
}
?>