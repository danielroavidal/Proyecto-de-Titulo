<?php
session_start();
if (!isset($_SESSION["nro_pedido"])) 
{
	$_SESSION["nro_pedido"]=0;
}
?>