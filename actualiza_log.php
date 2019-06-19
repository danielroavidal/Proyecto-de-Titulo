<?php
include 'include/global.php';
$user_id = $_GET['user_id'];
//$fecha=CURDATE();
//$conn = mysqli_connect($db_host, $db_usuario, $db_password, $db_nombre);
$conn = mysqli_connect('localhost', 'root', '', 'sab');
$sql   = "update  tb_log  set estado = 1 WHERE user_id= '" . $user_id . "' and estado=0";
$result = mysqli_query($conn, $sql);

while ($row = mysqli_fetch_array($result)) {

    $array = array("result" => true);
}

echo json_encode($array);
