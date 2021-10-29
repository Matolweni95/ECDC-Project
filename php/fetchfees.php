<?php
include_once("database.php");

$sql = "SELECT (fees, additionalFees) FROM totalFees;";
$result = mysqli_query($conn,$sql);
$resultCheck = mysqli_num_rows($result);

if ($resultCheck > 0){
    while($row = mysqli_fetch_assoc($result)){
        echo $row['parent_feesId'] . "<br>";
    }
}
?>