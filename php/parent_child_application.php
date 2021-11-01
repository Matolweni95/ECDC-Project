<?php
include_once("database.php");
$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata))
{
    $request = json_decode($postdata);
    $parentName = trim($request -> ParentName);
    $parentSurname = mysqli_real_escape_string($mysqli, trim($request->parentSurname));
    $parentEmailAddress = mysqli_real_escape_string($mysqli, trim($request->parentEmailAddress));
    $firstLineAddress = mysqli_real_escape_string($mysqli, trim($request->firstLineAddress));
    $Se = mysqli_real_escape_string($mysqli, trim($request->parentSurname));
    $parentEmailAddress = mysqli_real_escape_string($mysqli, trim($request->parentEmailAddress));
    $firstLineAddress = mysqli_real_escape_string($mysqli, trim($request->firstLineAddress));
    $parentEmailAddress = mysqli_real_escape_string($mysqli, trim($request->parentEmailAddress));
    $firstLineAddress = mysqli_real_escape_string($mysqli, trim($request->firstLineAddress));
    $parentSurname = mysqli_real_escape_string($mysqli, trim($request->parentSurname));
    $parentEmailAddress = mysqli_real_escape_string($mysqli, trim($request->parentEmailAddress));
    $firstLineAddress = mysqli_real_escape_string($mysqli, trim($request->firstLineAddress));
    $parentEmailAddress = mysqli_real_escape_string($mysqli, trim($request->parentEmailAddress));
    $firstLineAddress = mysqli_real_escape_string($mysqli, trim($request->firstLineAddress));
    $parentSurname = mysqli_real_escape_string($mysqli, trim($request->parentSurname));
    $parentEmailAddress = mysqli_real_escape_string($mysqli, trim($request->parentEmailAddress));
    $firstLineAddress = mysqli_real_escape_string($mysqli, trim($request->firstLineAddress));
}
}
}
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


