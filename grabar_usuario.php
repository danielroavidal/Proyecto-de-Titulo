<?php
$rut = $_POST['rut'];
$nombre = $_POST['nombre'];
$correo = $_POST['correo'];
$contrasena = $_POST['contrasena'];

include("../include/config.php");
if (isset($_POST['rut']) && isset($_POST['rut']) != "") {
    $con = mysqli_connect($db_host, $db_usuario, $db_password, $db_nombre);
    $query = "INSERT INTO tb_alumno values('$rut','$nombre','$correo','$contrasena',NULL)";
    $result = mysqli_query($con, $query);
}
if ($result) {
    echo json_encode('Grabado');
} else {
    echo json_encode('Error');
}
