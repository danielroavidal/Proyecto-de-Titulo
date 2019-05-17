<?php

if (isset($_GET['user_id']) && !empty($_GET['user_id'])) {


	include '../include/function.php';
    include '../include/global.php';

	$user_id 	= $_GET['user_id'];

    echo "$user_id;SecurityKey;" . $time_limit_reg . ";" . $base_path . "php/process_register.php;" . $base_path . "php/getac.php";
}
