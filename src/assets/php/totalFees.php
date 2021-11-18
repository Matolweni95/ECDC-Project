<?php
$fees = $_POST['fees'];
$additionalFees = $_POST['additionalFees'];

$sql = new mysqli ('sict-mysql.mandela.ac.za','grp12','grp12-2021','mountainviewdb');
//establish connection

 $mysqli = "INSERT into totalFees (fees,additionalFees) 
 VALUES ('$fees','$additionalFees')";
 

if($conn->query($sql) === TRUE) {
    echo "data inserted";

} else {
    echo "Error: ".$sql. "<br>". $conn ->error;
}
?>