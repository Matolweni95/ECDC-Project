<?php



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


