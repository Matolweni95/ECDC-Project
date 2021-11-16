<?php header('Access-Control-Allow-Origin: *');
include_once("connect.php");

$child = $_GET['child'];
$term = $_GET['term'];

$sql = "SELECT child.childName, child.childSurname, report.comment ,child.className, report.term, report.reading, report.counting, report.playing, report.comprehension, report.sleeping, report.art
FROM child INNER JOIN report ON child.childID = report.childID WHERE term = '$term' AND child.childID = '$child'";
$result = $conn->query($sql);
$myArr = array();

if($result->num_rows > 0){

while( $row = $result->fetch_assoc()) {
	$myArr[] = $row;
}
} else {
	echo "0 results";

}

$myJSON = json_encode($myArr);
echo $myJSON;
?>