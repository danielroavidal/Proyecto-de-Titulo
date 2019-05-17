<?php
$rut = $_POST['rut'];
$nombre=$_POST['nombre'];
$correo=$_POST['correo'];
$contrasena=$_POST['contrasena'];
include("../include/config.php");
if (isset($_POST['rut']) && isset($_POST['rut']) != "") {
    $con = mysqli_connect($db_host, $db_usuario, $db_password, $db_nombre);
    $con->set_charset("utf8mb4");
    $query = "INSERT INTO tb_alumno values('$rut','$nombre','$correo','$contrasena')";
    $result = mysqli_query($con, $query);
}
echo json_encode($result);
mysqli_close($con);
?>