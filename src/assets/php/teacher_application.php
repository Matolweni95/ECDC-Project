<?php
$Name = $_POST ["Name"];
$Surname = $_POST["Surname"];
$emailAddress = $_POST["emailAddress"];
$ContactNo = $_POST["contactNo"];
$ImageUpload = $_FILES["ImageUpload"];
$cvUpload = $_FILES["cvUpload"];
$policeClearance =$_FILES["policeClearance"];
$qualification = $_FILES["qualification"];
$proof_of_caregiver_experience = $_FILES["proof_Of_caregiver_experience"];
$status = $_POST["status"];
$password = $_POST["password"];
$vacancy = $_POST["vacancy"];

$sql = new mysqli ('sict-mysql.mandela.ac.za','grp12','grp12-2021','mountainviewdb');
//establish connection

 $mysqli = "INSERT into teacher_application (, name , surname, emailAddress, contactNo, imageUpload, cvUpload, policeClearance, qualification, 
 proof_of_caregiver_experience, status, password, vacancy) 
 values ('$name', '$surname', '$emailAddress', '$contactNo', 
 '$ImageUpload', '$cvUpload','$policeClearance','$qualification','$proof_of_caregiver_experience',
 '$status','$password','$vacancy')";
 

if($conn->query($sql) === TRUE) {
    echo "data inserted";

} else {
    echo "Error: ".$sql. "<br>". $conn ->error;
}
?>