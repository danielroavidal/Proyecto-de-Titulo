<?php
	include '../include/global.php';
	$sql   = "SELECT count(finger_id) as ct FROM  tb_finger WHERE rut=".$_GET['user_id'];
    $result= mysqli_query($conn,$sql);
	$data  = mysqli_fetch_array($result);
    if (intval($data1['ct']) > intval($_GET['current'])) {
			$res['result'] = true;			
			$res['current'] = intval($data1['ct']);			
		}
		else
		{
			$res['result'] = false;
		}
		echo json_encode($res);
	

?>
