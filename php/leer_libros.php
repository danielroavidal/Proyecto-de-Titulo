<?php
// include Database connection file 
include("../include/config.php");
$con = mysqli_connect($db_host, $db_usuario, $db_password, $db_nombre);
$con->set_charset("utf8mb4");
$query = "SELECT isbn,tema,autor,desc_editorial,desc_idioma,edicion,cantidad-(select case when sum(tb_pedido.cantidad) is null then 0 else sum(tb_pedido.cantidad) end  from tb_pedido where estado=1 and tb_pedido.isbn=tb_libro.isbn ) as cantidad FROM tb_libro,tb_editorial,tb_idioma where tb_editorial.id_editorial = tb_libro.editorial and tb_idioma.id_idioma=tb_libro.idioma";
$result = mysqli_query($con, $query);
// if query results contains rows then featch those rows 
while ($row = mysqli_fetch_assoc($result)) {

    $vetor["data"][] =  $row;
}

echo json_encode($vetor);
mysqli_close($con);
