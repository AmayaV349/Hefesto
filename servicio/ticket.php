<?php
	// error_reporting(E_ALL);
	
	// ini_set('display_errors', 1);
	
	include "../ticket/ticket_manager.php";

	include "../ticket/ticket_propiedades.php";

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
		
			$servicio = $_POST['pServicio'];

			switch ($servicio) {

			    case 1:

			    	ticket_manager::CargarTipoIncidente();

			    break;

			    case 2:

			        ticket_manager::CargarTipoComplejidad();

			    break;

			    case 3:

			    	$pIdUsuario = $_POST['pIdUsuario'];

			        ticket_manager::CargarTicketsNoFinalizados($pIdUsuario);

			    break;

			    case 4:

			    	$pIdUsuario = $_POST['pIdUsuario'];

			        ticket_manager::CargarTicketsFinalizados($pIdUsuario);

			    break;
			}

		break;

		case 'PUT':
			
			parse_str(file_get_contents("php://input"),$put_vars);

			$servicio = $put_vars['pServicio'];

			switch ($servicio) {

				case 1:
					
					$pIdEmpresa = $put_vars['pIdEmpresa'];

					$pIdUsuario = $put_vars['pIdUsuario'];

					$pTipoIncidente = $put_vars['pTipoIncidente'];

					$pFecha = $put_vars['pFecha'];

					$pHora = $put_vars['pHora'];

					$pDescripcion = $put_vars['pDescripcion'];

					$pComplejidad = $put_vars['pComplejidad'];

					$objTicket = new ticket_propiedades($pIdEmpresa,$pIdUsuario,$pTipoIncidente,$pFecha,$pHora,$pDescripcion,$pComplejidad);

					ticket_manager::AgregarTicket($objTicket);

				break;

			}
			
		break;
	}
?>