<?php
$firstName = $_POST ["firstName"];
$surname = $_POST["Surname"];
$emailAddress = $_POST["emailAddress"];

$sql = new mysqli ('sict-mysql.mandela.ac.za','grp12','grp12-2021','mountainviewdb');
//establish connection

 $mysqli = "INSERT into manager (firstname , surname, emailAddress) 
 VALUES ('$firstName','$surname',$emailAddress')";
 

if($conn->query($sql) === TRUE) {
    echo "data inserted";

} else {
    echo "Error: ".$sql. "<br>". $conn ->error;
}
?>