<?php
	include "../login/login_manager.php";

	$accion = $_SERVER['REQUEST_METHOD'];

	switch ($accion) {

		case 'GET':

			$servicio = $_GET['pServicio'];

			switch ($servicio) {

			    case 1:

			    	

			    break;

			}

		break;

		case 'POST':
		
			$servicio = $_POST['servicio'];

			switch ($servicio) {

			    case 1:

			    	$pUsuario = $_POST['pUsuario'];

			    	$pPasswd = $_POST['pPasswd'];

			        login_manager::ingresar($pUsuario, $pPasswd);

			    break;

			    case 2:

			        

			    break;
			}

		break;

		case 'PUT':
			
			parse_str(file_get_contents("php://input"),$put_vars);

			$servicio = $put_vars['pServicio'];

			switch ($pServicio) {

				case 1:


				break;

			}
				
		break;
	}
?>