<?php

$isbn=$_POST['libro']; 
$baseFromJavascript = $_POST['base64']; 
$base_to_php = explode(',', $baseFromJavascript);
$data = $base_to_php[1];
include("../include/config.php");
if (isset($_POST['base64']) && isset($_POST['base64']) != "") {
    $con = mysqli_connect($db_host, $db_usuario, $db_password, $db_nombre);
    $con->set_charset("utf8mb4");
    $query = "INSERT INTO tb_qr values('$isbn','$data')";
    $result = mysqli_query($con, $query);
}
echo json_encode($result);