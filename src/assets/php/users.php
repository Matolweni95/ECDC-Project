<?php
$name = $_POST ["name"];
$surname = $_POST["Surname"];
$password = $_POST["password"];
$role= $_POST["role"];
$email = $_POST["email"];

$sql = new mysqli ('sict-mysql.mandela.ac.za','grp12','grp12-2021','mountainviewdb');
//establish connection

 $mysqli = "INSERT into users (firstname , surname,password, role ,email) 
 VALUES ('$name','$surname',$password,$role,'$email')";
 

if($conn->query($sql) === TRUE) {
    echo "data inserted";

} else {
    echo "Error: ".$sql. "<br>". $conn ->error;
}
?>