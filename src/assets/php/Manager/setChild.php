<?php header('Access-Control-Allow-Origin: *');
include_once("connect.php");

$id = $_GET['id'];

$sql = "INSERT INTO child (childName, childSurname, dateOfBirth, className, additionalPrograms, ApplicationID, parentName, parentSurname)
SELECT childName, childSurname, dateOfBirth, class,additionalPrograms, ApplicationID, parentName, parentSurname FROM parent_child_application
WHERE Application_status = 'Accepted' and ApplicationID = '$id'";


    
$sql2 = "INSERT INTO parent (parentName, parentSurname, parentEmailAddress, firstLineAddress,secondLineAddress, ThirdLineAddress, zip, occupation, childRelation, applicationId, parentContactNo, parentIdNo)
SELECT parentName, parentSurname, parentEmailAddress, parentIdNo, firstLineAddress, secondLineAddress, thirdLineAddress zip, childRelation, occupation, ApplicationID, parentContactNo, parentIdNo FROM parent_child_application
WHERE Application_status = 'Accepted' and ApplicationID = '$id'";


$result = $conn->query($sql);
$result2 = $conn->query($sql2);


?>