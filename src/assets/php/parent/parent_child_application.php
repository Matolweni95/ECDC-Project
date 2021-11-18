<?php

include ("database.php");
$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata))
{
$request = json_decode($postdata);

// first form
$parentName = mysqli_real_escape_string($mysqli, trim($request->parentName));
$parentSurname = mysqli_real_escape_string($mysqli, trim($request->parentSurname));
$parentEmailAddress = mysqli_real_escape_string($mysqli, trim($request->parentEmailAddress));
$parentContactNo = mysqli_real_escape_string($mysqli, trim($request->parentContactNo));
$firstLineAddress = mysqli_real_escape_string($mysqli, trim($request->firstLineAddress));
$occupation = mysqli_real_escape_string($mysqli, trim($request->occupation));
$parentId = mysqli_real_escape_string($mysqli, trim($request->parentId));
$secondLineAddress = mysqli_real_escape_string($mysqli, trim($request->secondLineAddress));
$thirdLineAddress = mysqli_real_escape_string($mysqli, trim($request->thirdLineAddress));
$zip = mysqli_real_escape_string($mysqli, trim($request->zip));
$password = mysqli_real_escape_string($mysqli, trim($request->password));

//second form
$emergencyName = mysqli_real_escape_string($mysqli, trim($request->emergencyName));
$emergencySurname = mysqli_real_escape_string($mysqli, trim($request->emergencySurname));
$emergencyContactNo = mysqli_real_escape_string($mysqli, trim($request->emergencyContactNo));
$emergencyEmailAddress = mysqli_real_escape_string($mysqli, trim($request->emergencyEmailAddress));
$emergencyId = mysqli_real_escape_string($mysqli, trim($request->emergencyId));
$emergencyLine1Address = mysqli_real_escape_string($mysqli, trim($request->emergencyLine1Address));
$emergencyLine2Address = mysqli_real_escape_string($mysqli, trim($request->emergencyLine2Address));
$emergencyLine3Address = mysqli_real_escape_string($mysqli, trim($request->emergencyLine3Address));
$emergencyZip = mysqli_real_escape_string($mysqli, trim($request->emergencyZip));

//form three

$childName = mysqli_real_escape_string($mysqli, trim($request->childName));
$childSurname = mysqli_real_escape_string($mysqli, trim($request->childSurname));
$dateOfBirth = mysqli_real_escape_string($mysqli, trim($request->dateOfBirth));

// forth form

$relation = mysqli_real_escape_string($mysqli, trim($request->relation));
$diet = mysqli_real_escape_string($mysqli, trim($request->diet));
$classes = mysqli_real_escape_string($mysqli, trim($request->classes));
$additionalprograms = mysqli_real_escape_string($mysqli, trim($request->additionalprograms));


$sql = "INSERT INTO parent_child_application (
parentName,
parentSurname, 
parentContactNo, 
parentEmailAddress, 
parentIdNo, 
firstLineAddress, 
secondLineAddress, 
thirdLineAddress, 
zip, 
secretkey,
occupation, 

emergencyName, 
emergencySurname, 
emergencyNo, 
emergencyLine1Address, 
emergencyLine2Address, 
emergencyLine3Address, 
emergencyZip, 

childName, 
childSurname, 
dateOfBirth, 

ChildDietaryRequirements, 
childRelation, 
class, 
additionalPrograms
,type) 

VALUES (
'$parentName',
'$parentSurname',
'$parentContactNo',
'$parentEmailAddress',
'$parentId',
'$firstLineAddress',
'$secondLineAddress',
'$thirdLineAddress',
'$zip',
'$password',
'$occupation',

'$emergencyName',
'$emergencySurname',
'$emergencyContactNo',
'$emergencyLine1Address',
'$emergencyLine2Address',
'$emergencyLine3Address',
'$emergencyZip',

'$childName',
'$childSurname',
'$dateOfBirth',

'$diet',
'$relation',
'$classes',
'$additionalprograms',
'Parent')";
if ($mysqli->query($sql) === TRUE) {
$authdata = [
'parentName' => $parentName,
'parentSurname' => $parentSurname,
'parentEmailAddress' => $parentEmailAddress,
'parentContactNo' => $parentContactNo,
'firstLineAddress' => $firstLineAddress,
'occupation' => $occupation,
'parentId' => $parentId,
'secondLineAddress' => $secondLineAddress,
'thirdLineAddress' => $thirdLineAddress,
'zip' => $zip,
'password' => $password,
'emergencyName' => $emergencyName,
'emergencySurname' => $emergencySurname,
'emergencyContactNo' => $emergencyContactNo,
'emergencyEmailAddress' => $emergencyEmailAddress,
'emergencyId' => $emergencyId,
'emergencyLine1Address' => $emergencyLine1Address,
'emergencyLine2Address' => $emergencyLine2Address,
'emergencyLine3Address' => $emergencyLine3Address,
'emergencyZip' => $emergencyZip,
'childName' => $childName,
'childSurname' => $childSurname,
'dateOfBirth' => $dateOfBirth,
'relation' => $relation,
'diet' => $diet,
'classes' => $classes,
'additionalprograms' => $additionalprograms,
'Id' => mysqli_insert_id($mysqli)
];
echo json_encode($authdata);
}
}

?>