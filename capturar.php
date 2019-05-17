<?php
    include '../include/function.php';
    include '../include/global.php';

    $user = getUser();
    foreach ($user as $row) {
        $rut= $row['rut'];
        $url_register		= base64_encode($base_path . "php/register.php?user_id=" . $rut);
    }
    echo json_encode($url_register);
?>