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
$childName = $_POST["childName"];
$childSurname = $_POST["childSurname"];
$dateOfBirth = $_POST["dateOfBirth"];
$certificateUpload = $_FILES["certificateUpload"];
$childImage = $_FILES["childImage"];
$class = $_POST["class"];
$additionalPrograms = $_POST["additionalPrograms"];
$parentContactNo = $_POST["parentContactNo"];
$parentStatus = $_POST["parentStatus"];
$emergencyName = $_POST["emergencyName"];
$emergencySurname = $_POST ["emergencySurname"];
$emergencyLine1Address = $_POST["emergencyLine1Address"];
$emergencyLine2Address = $_POST["emergencyLine2Address"];
$emergencyLine3Address = $_POST["emergencyLine3Address"];
$emergencyZip = $_POST["emergencyZip"];
$emergencyOccupation = $_POST["emergencyOccupation"];
$emergencyChildRelation = $_POST["emergencyChildRelation"];
$emergencyIdUpload =$_FILES["emergencyIdUpload"];
$emergencyImage = $_FILES["emergencyImage"];
$childDietaryRequirements = $_POST["childDietaryRequirements"];
$allergies = $_POST["allergies"];
$emergencyNo = $_POST["emergencyNo"];
$emergencyEmail = $_POST["emergencyEmail"];

$sql = new mysqli ('sict-mysql.mandela.ac.za','grp12','grp12-2021','mountainviewdb');
//establish connection

 $mysqli = "INSERT INTO parent_child_application(parentName , parentSurname, parentEmailAddress, 
 firstLineAddress, secondLineAddress, thirdLineAddress, zip, occupation,childRelation, idDocument,
 parentImage, userPassword, childName, ChildSurname, dateOfBirth, certificateUpload, childImage, class,
  additionalPrograms, ParentContactNo, parentStatus, emergencyName, emergencySurname, 
  emergencyLine1Address, emergencyLine2Address, emergencyLine3Address,emergencyZip, emergencyOccupation,
   emergencyChildRelation,emergencyIdUpload, emergencyImage,childDietaryRequirements, allergies)
    VALUES ('$parentName', '$parentSurname', '$parentEmailAddress', '$firstLineAddress','$secondLineAddress',
    '$thirdLineAddress','$zip','$occupation',
    '$childRelation', '$idDocument','$parentImage','$userPassword','$childName', '$childSurname',
    '$dateOfBirth','$certificateUpload','$childImage','$class','$additionalPrograms',
    '$parentContactNo','$parentStatus','$emergencyName','$emergencySurname','$emergencyLine1Address',
    '$emergencyLine2Address','$emergencyLine3Address','$emergencyZip','$occupation',
    '$emergencyChildRelation','$emergencyIdUpload','$emergencyImage','$childDietaryRequirements',
    '$allergies','$emergencyNo','$emergencyEmail')";

if($conn->query($sql) === TRUE) {
    echo "data inserted";
} else {
    echo "Error: ".$sql. "<br>". $conn ->error;
}
?>


