<?php
include 'include/function.php';
include 'include/global.php';
$rut = $_POST['rut'];
$device = getDevice();
$user = getUser($rut);
foreach ($user as $row) {
    $rut = $row['rut'];
    $user_id = $row['user_id'];
    $nombre = $row['user_name'];
    $verification        = '';
    $url_verification    = base64_encode($base_path . "verification.php?user_id=" . $row['user_id']);
    $array = array("url" => $url_verification, "rut" => $rut, "nombre" => $nombre, "user_id" => $user_id);
    echo json_encode($array);
}
