<?php
$feesId = $_POST['feesId'];

$sql = new mysqli ('sict-mysql.mandela.ac.za','grp12','grp12-2021','mountainviewdb');
//establish connection

 $mysqli = "UPDATE parent SET feesId = '$feesId' 
 where parent.feesId ='totalFees.feesId'";
 

if($conn->query($sql) === TRUE) {
    echo "data inserted";

} else {
    echo "Error: ".$sql. "<br>". $conn ->error;
}
?>