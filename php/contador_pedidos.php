<?php
// include Database connection file 
$rut=$_POST['rut'];
include("../include/config.php");
if (isset($_POST['rut']) && isset($_POST['rut']) != "") {
	$con = mysqli_connect($db_host, $db_usuario, $db_password, $db_nombre);
	$con->set_charset("utf8mb4");
	$query = "SELECT count(id_pedido) nro_pedidos from tb_pedido estado=1 and rut='" . $rut . "' ";
	$result = mysqli_query($con, $query);
// if query results contains rows then featch those rows 
	while ($row = mysqli_fetch_assoc($result)) {

    	$vetor["data"][] =  $row;
	}
}
echo json_encode($vetor);
mysqli_close($con);
