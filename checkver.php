<?php
include 'include/global.php';
$user_id = $_GET['user_id'];
//$fecha=CURDATE();
//$conn = mysqli_connect($db_host, $db_usuario, $db_password, $db_nombre);
$conn = mysqli_connect('localhost', 'root', '', 'sab');
$sql   = "SELECT count(user_id) as ct FROM  tb_log WHERE user_id= '" . $user_id . "' and date(SUBSTRING(log_time, 1, 10))  =   CURRENT_DATE() and estado=0 ";
$result = mysqli_query($conn, $sql);
$array = array("result" => false);
while ($row = mysqli_fetch_array($result)) {

    $array = array("result" => true);
}

echo json_encode($array);
