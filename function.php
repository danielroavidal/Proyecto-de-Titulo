<?php

function getDevice()
{
	include 'global.php';
	$conn = mysqli_connect($db_host, $db_user, $db_pass, $db_name);
	$conn->set_charset("utf8mb4");
	$sql 	= 'SELECT * FROM dispositivo ORDER BY device_name ASC';
	$result	= mysqli_query($conn, $sql);
	$arr 	= array();
	$i 	= 0;

	while ($row = mysqli_fetch_array($result)) {

		$arr[$i] = array(
			'device_name'	=> $row['device_name'],
			'sn'		=> $row['sn'],
			'vc'		=> $row['vc'],
			'ac'		=> $row['ac'],
			'vkey'		=> $row['vkey']
		);

		$i++;
	}

	return $arr;
}

function getDeviceAcSn($vc)
{
	include 'global.php';
	$conn = mysqli_connect($db_host, $db_user, $db_pass, $db_name);
	$conn->set_charset("utf8mb4");
	$sql 	= "SELECT * FROM dispositivo WHERE vc ='" . $vc . "'";
	$result	= mysqli_query($conn, $sql);
	$arr 	= array();
	$i 	= 0;

	while ($row = mysqli_fetch_array($result)) {

		$arr[$i] = array(
			'device_name'	=> $row['device_name'],
			'sn'		=> $row['sn'],
			'vc'		=> $row['vc'],
			'ac'		=> $row['ac'],
			'vkey'		=> $row['vkey']
		);

		$i++;
	}

	return $arr;
}

function getDeviceBySn($sn)
{
	include 'global.php';
	$conn = mysqli_connect($db_host, $db_user, $db_pass, $db_name);
	$conn->set_charset("utf8mb4");
	$sql 	= "SELECT * FROM dispositivo WHERE sn ='" . $sn . "'";
	$result	= mysqli_query($conn, $sql);
	$arr 	= array();
	$i 	= 0;

	while ($row = mysqli_fetch_array($result)) {

		$arr[$i] = array(
			'device_name'	=> $row['device_name'],
			'sn'		=> $row['sn'],
			'vc'		=> $row['vc'],
			'ac'		=> $row['ac'],
			'vkey'		=> $row['vkey']
		);

		$i++;
	}

	return $arr;
}

function getUser()
{
	include 'global.php';
	$conn = mysqli_connect($db_host, $db_user, $db_pass, $db_name);
	$conn->set_charset("utf8mb4");
	$sql 	= 'SELECT rut,nombre FROM tb_alumno ORDER BY nombre ASC';
	$result	= mysqli_query($conn, $sql);
	$arr 	= array();
	$i 	= 0;

	while ($row = mysqli_fetch_array($result)) {

		$arr[$i] = array(
			'rut'	=> $row['rut'],
			'user_name'	=> $row['nombre']
		);

		$i++;
	}

	return $arr;
}

function deviceCheckSn($sn)
{
	include 'global.php';
	$conn = mysqli_connect($db_host, $db_user, $db_pass, $db_name);
	$conn->set_charset("utf8mb4");
	$sql 	= "SELECT count(sn) as ct FROM dispositivo WHERE sn = '" . $sn . "'";
	$result	= mysqli_query($conn, $sql);
	$data 	= mysqli_fetch_array($result);

	if ($data['ct'] != '0' && $data['ct'] != '') {
		return "sn already exist!";
	} else {
		return 1;
	}
}

function checkUserName($user_name)
{
	include 'global.php';
	$conn = mysqli_connect($db_host, $db_user, $db_pass, $db_name);
	$conn->set_charset("utf8mb4");
	$sql	= "SELECT user_name FROM demo_user WHERE user_name = '" . $user_name . "'";
	$result	= mysqli_query($conn, $sql);
	$row	= mysqli_num_rows($result);

	if ($row > 0) {
		return "Username exist!";
	} else {
		return "1";
	}
}

function getUserFinger($rut)
{
	include 'global.php';
	$conn = mysqli_connect($db_host, $db_user, $db_pass, $db_name);
	$conn->set_charset("utf8mb4");
	$sql 	= "SELECT * FROM tb_finger WHERE rut= '" . $rut . "' ";
	$result = mysqli_query($conn, $sql);
	$arr 	= array();
	$i	= 0;

	while ($row = mysqli_fetch_array($result)) {

		$arr[$i] = array(
			'rut'	=> $row['rut'],
			"finger_id"	=> $row['finger_id'],
			"finger_data"	=> $row['finger_data']
		);
		$i++;
	}

	return $arr;
}

function getLog()
{
	include 'global.php';
	$conn = mysqli_connect($db_host, $db_user, $db_pass, $db_name);
	$conn->set_charset("utf8mb4");
	$sql 	= 'SELECT * FROM tb_log ORDER BY log_time DESC';
	$result	= mysqli_query($conn, $sql);
	$arr 	= array();
	$i 	= 0;

	while ($row = mysqli_fetch_array($result)) {

		$arr[$i] = array(
			'log_time'		=> $row['log_time'],
			'user_name'		=> $row['user_name'],
			'data'			=> $row['data']
		);

		$i++;
	}

	return $arr;
}

function createLog($user_name, $time, $sn)
{
	include 'global.php';
	$conn = mysqli_connect($db_host, $db_user, $db_pass, $db_name);
	$conn->set_charset("utf8mb4");
	$sq1 		= "INSERT INTO tb_log SET user_name='" . $user_name . "', data='" . date('Y-m-d H:i:s', strtotime($time)) . " (PC Time) | " . $sn . " (SN)" . "' ";
	$result1	= mysqli_query($conn, $sq1);
	if ($result1) {
		return 1;
	} else {
		return "Error insert log data!";
	}
}
