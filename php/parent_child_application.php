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
    $secondLineAddress = mysqli_real_escape_string($mysqli, trim($request->secondLineAddress));
    $thirdLineAddress = mysqli_real_escape_string($mysqli, trim($request->thirdLineAddress));
    $zip = mysqli_real_escape_string($mysqli, trim($request->zip));
    $occupation = mysqli_real_escape_string($mysqli, trim($request->zip));
    $idDocument = mysqli_real_escape_string($mysqli, trim($request->idDocument));
    $parentImage = mysqli_real_escape_string($mysqli, trim($request->parentImage));
    $userPassword = mysqli_real_escape_string($mysqli, trim($request->userPassword));
    $childName = mysqli_real_escape_string($mysqli, trim($request->childName));
    $childSurname = mysqli_real_escape_string($mysqli, trim($request->ChildSurname));
    $dateOfBirth = mysqli_real_escape_string($mysqli, trim($request->dateOfBirth));
    $certificateUpload = mysqli_real_escape_string($mysqli, trim($request->certificateUpload));
    $childImage = mysqli_real_escape_string($mysqli, trim($request->childImage));
    $class = mysqli_real_escape_string($mysqli, trim($request->class));
    $additionalPrograms = mysqli_real_escape_string($mysqli, trim($request->additionalPrograms));
    $parentContactNo = mysqli_real_escape_string($mysqli, trim($request->ParentContactNo));
    $parentStatus = mysqli_real_escape_string($mysqli, trim($request->parentStatus));
    $emergencyName = mysqli_real_escape_string($mysqli, trim($request->emergencyName));
    $emergencySurname = mysqli_real_escape_string($mysqli, trim($request->emergencySurname));
    $emergencyLine1Address = mysqli_real_escape_string($mysqli, trim($request->emergencyLine1Address));
    $emergencyLine2Address = mysqli_real_escape_string($mysqli, trim($request->emergencyLine2Address));
    $emergencyLine3Address = mysqli_real_escape_string($mysqli, trim($request->$emergencyLine3Address));
    $emergencyZip = mysqli_real_escape_string($mysqli, trim($request->emergencyZip));
    $emergencyOccupation = mysqli_real_escape_string($mysqli, trim($request->emergencyOccupation));
    $emergencyChildRelation = mysqli_real_escape_string($mysqli, trim($request->emergencyChildRelation));
    $emergencyIdUpload = mysqli_real_escape_string($mysqli, trim($request->emergencyIdUpload));
    $emergencyImage = mysqli_real_escape_string($mysqli, trim($request->emergencyImage));
    $childDietaryRequirements = mysqli_real_escape_string($mysqli, trim($request->childDietaryRequirements));
    $allergies = mysqli_real_escape_string($mysqli, trim($request->allergies));
    $sql = "INSERT INTO parent_child_application(parentName , parentSurname, parentEmailAddress, 
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

   if($mysqli->query($sql) === TRUE) {
       $authdata = [
        'parentName'=> $parentName,
        'parentSurname'=> $parentSurname, 
        'parentEmailAddress'=> $parentEmailAddress, 
        'firstLineAddress' => $firstLineAddress,
        'secondLineAddress'=> $secondLineAddress,
        'thirdLineAddress' => $thirdLineAddress,
        'zip'=> $zip,
        'occupation' => $occupation,
        'childRelation' => $childRelation, 
        'idDocument'  ,
        'parentImage',
        'userPassword'=> $userPassword,
        'childName'=> $childName, 
        'childSurname'=> $childSurname,
        'dateOfBirth'=> $dateOfBirth,
        'certificateUpload',
        'childImage',
        'class'=> $class,
        'additionalPrograms' => $additionalPrograms ,
        'parentContactNo' => $parentContactNo,
        'parentStatus'=> $parentStatus,
        'emergencyName' => $emergencyName,
        'emergencySurname' => $emergencySurname,
        'emergencyLine1Address' => $emergencyLine1Address,
        'emergencyLine2Address'=> $emergencyLine2Address,
        'emergencyLine3Address'=> $emergencyLine3Address,
        'emergencyZip'=> $emergencyZip,
        'occupation' => $occupation,
        'emergencyChildRelation' => $emergencyChildRelation,
        'emergencyIdUpload' ,
        'emergencyImage',
        'childDietaryRequirements' => $childDietaryRequirements,
        'allergies'=> $allergies,
        'emergencyNo' => $emergencyNo,
        'emergencyEmail' => $emergencyEmail
       ];
       echo json_encode($authdata);

   }
 
}
?>


