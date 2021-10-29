<?php
include_once("database.php");

$sql = "SELECT * FROM child;";
$result = mysqli_query($conn,$sql);
$resultCheck = mysqli_num_rows($result);

if ($resultCheck > 0){
    while($row = mysqli_fetch_assoc($result)){
        echo $row['mananger_manangerId'] . "<br>";
    }
}
?>