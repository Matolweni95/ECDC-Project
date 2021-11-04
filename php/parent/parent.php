<?php
$parentName = $_POST ["parentName"];
$parentSurname = $_POST["parentSurname"];
$parentEmail = $_POST["parentEmail"];
$firstLineAddress = $_POST["firstLineAddress"];
$secondLineAddress = $_POST["secondLineAddress"];
$thirdLineAddress = $_POST["thirdLineAddress"];
$zip = $_POST["zip"];
$occupation = $_POST["occupation"];
$childRelation = $_POST["childRelation"];
$idDocument = $_FILES["idDocument"];
$parentImage = $_FILES["parentImage"];
$userPassword = $_FILES["userPassword"];



$sql = new mysqli ('sict-mysql.mandela.ac.za','grp12','grp12-2021','mountainviewdb');

$msqli = "INSERT INTO parent (parentName,parentSurname,parentEmail,firstLineAddress,secondLineAddress,
thirdLineAddress,zip,occupation,childRelation,idDocument,parentImage,userPassword,applicationId) 
select ('$parentName','$parentSurname','$parentEmail','$firstLineAddress','$secondLineAddress',
'$thirdLineAddress','$zip','$occupation','$childRelation','$idDocument','$parentImage','$userPassword') 
from parent_child_application where parent.applicationId = 'parent_child_application.applicationId'";

if($conn->query($sql) === TRUE) {
    echo "data inserted";
} else {
    echo "Error: ".$sql. "<br>". $conn ->error;
}

?>