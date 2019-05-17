<?php
// check request
$isbn = $_POST['isbn'];
$rut=$_POST['rut'];
$fecha_i=$_POST['fecha_i'];
$fecha_t=$_POST['fecha_t'];
$cantidad=$_POST['cantidad'];
$dias=$_POST['dias'];
$estado=$_POST['estado'];
include("../include/config.php");
if (isset($_POST['isbn']) && isset($_POST['isbn']) != "") {
    $con = mysqli_connect($db_host, $db_usuario, $db_password, $db_nombre);
    $con->set_charset("utf8mb4");
    $query = "INSERT INTO tb_pedido values(null,'$isbn','$rut',STR_TO_DATE( '$fecha_i', '%d-%m-%Y' ),STR_TO_DATE( '$fecha_t', '%d-%m-%Y' ),'$dias','$cantidad','$estado')";
    $result = mysqli_query($con, $query);
}
echo json_encode($result);
mysqli_close($con);
