<?php
    include '../include/function.php';
    include '../include/global.php';

    $user = getUser();
    foreach ($user as $row) {
        $rut= $row['rut'];
        $nombre=$row['user_name'];
        $url_register		= base64_encode($base_path . "php/register.php?user_id=" . $rut);
    }
    $_SESSION["newsession"]=$value;
    $array=array("url"=>$url_register,"rut"=>$rut,"nombre"=>$nombre);
    echo json_encode($array);
?>