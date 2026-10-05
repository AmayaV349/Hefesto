<?php
	include "../generaqr/generaqr_manager.php";

	include "../generaqr/generaqr_propiedades.php";

	date_default_timezone_set('America/Bogota');

	$accion = $_SERVER['REQUEST_METHOD'];

	switch ($accion) {

		case 'GET':

			$pServicio = $_GET['pServicio'];

			switch ($pServicio){

			    case 1:

			        break;

			    case 2:

			        break;

			}

			break;

		case 'POST':

			$pServicio = $_POST['pServicio'];

			switch ($pServicio) {

			    case 1:

			    	cuentas_manager::traerLogin($_POST['pInversionista']);

			        break;

			    case 2:

			    	
			    	
			        break;

			    case 3:

			    	

			        break;
			}

			break;

		case 'PUT':

			parse_str(file_get_contents("php://input"),$put_vars);

			$pServicio = $put_vars['pServicio'];

			switch ($pServicio) {

			    case 1:

			        $pInversionista = $put_vars['pInversionista'];

					$pCuenta = $put_vars['pCuenta'];

					$pPais = $put_vars['pPais'];

					$pMoneda = $put_vars['pMoneda'];

					$pFechaA = $put_vars['pFechaA'];

					$pSucursal = $put_vars['pSucursal'];

					$pEstado = $put_vars['pEstado'];

					$pUsuario = $put_vars['pUsuario'];

					$pFechaMod = date('Y-m-d');

					$objCuenta = new cuentas_propiedades($pInversionista,$pCuenta,$pPais,$pMoneda,$pFechaA,$pSucursal,$pEstado,$pUsuario,$pFechaMod);

					cuentas_manager::agregarCuenta($objCuenta);

			        break;

			}
			
			break;

	}
?>