<?php

include "../servicio/ado/config.php";

class cuentas_manager {

  function agregarCuenta($objCuenta){
    $resultado = config::conectar();
    $sql = $resultado->prepare("CALL SPAGREGARCUENTA(".$objCuenta->getInversionista().",'".$objCuenta->getCuenta()."',".$objCuenta->getPais().",".$objCuenta->getMoneda().",'".$objCuenta->getFechaA()."',".$objCuenta->getSucursal().",".$objCuenta->getEstado().",".$objCuenta->getUsuario().",'".$objCuenta->getFechaMod()."')");
    $sql->execute();
    $sql->setFetchMode(PDO::FETCH_ASSOC);
    header("HTTP/1.1 200 OK");
    echo json_encode( $sql->fetchAll());
    exit();
  }

  function traerLogin($pInversionista){
    $resultado = config::conectar();
    $sql = $resultado->prepare("CALL SPTRAERLOGIN($pInversionista)");
    $sql->execute();
    $sql->setFetchMode(PDO::FETCH_ASSOC);
    header("HTTP/1.1 200 OK");
    echo json_encode( $sql->fetchAll());
    exit();
  }

  function traerCodigoPais($pPais){
    $resultado = config::conectar();
    $sql = $resultado->prepare("CALL SPTRAERCODIGOPAIS($pPais)");
    $sql->execute();
    $sql->setFetchMode(PDO::FETCH_ASSOC);
    header("HTTP/1.1 200 OK");
    echo json_encode( $sql->fetchAll());
    exit();
  }

  function verificarCuenta($pCuenta){
    $resultado = config::conectar();
    $sql = $resultado->prepare("CALL SPVERIFICARCUENTA('$pCuenta')");
    $sql->execute();
    $sql->setFetchMode(PDO::FETCH_ASSOC);
    header("HTTP/1.1 200 OK");
    echo json_encode( $sql->fetchAll());
    exit();
  }

}

?>