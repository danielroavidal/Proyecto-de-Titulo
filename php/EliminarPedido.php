<?php
// check request
if(isset($_POST['id_pedido']) && isset($_POST['id_pedido']) != "")
{
    // include Database connection file
    include("../config.php");
 
    // get user id
    $id_pedido= $_POST['id_pedido'];

 
    // delete User
    $query = "DELETE FROM tb_pedido WHERE id = '$id_pedido'";
    if (!$result = mysqli_query($con, $query)) {
        exit(mysqli_error($con));
    }
}
