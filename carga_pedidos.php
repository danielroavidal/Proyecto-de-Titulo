<?php
// include Database connection file 
$rut = $_POST['rut'];
include("../include/config.php");
$con = mysqli_connect($db_host, $db_usuario, $db_password, $db_nombre);
$con->set_charset("utf8mb4");
$query = "SELECT id_pedido,tb_pedido.isbn,estado,tema,ubicacion FROM tb_pedido,tb_libro where estado=1 and tb_pedido.isbn = tb_libro.isbn and rut='" . $rut . "'";
$result = mysqli_query($con, $query);
// if query results contains rows then featch those rows 
while ($row = mysqli_fetch_assoc($result)) {

    $vetor["data"][] =  $row;
}

echo json_encode($vetor);
mysqli_close($con);

