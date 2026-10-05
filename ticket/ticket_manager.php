<?php
// error_reporting(E_ALL);

// ini_set('display_errors', 1);

include "../servicio/ado/config.php";

class ticket_manager {

  /*** Carga la lista Tipo Incidente ***/
  function CargarTipoIncidente(){

    $resultado = config::conectar();

    $sql = $resultado->prepare("CALL SPAGREGARCONVOCATORIA()");

    $sql->execute();

    $sql->setFetchMode(PDO::FETCH_ASSOC);

    header("HTTP/1.1 200 OK");

    echo json_encode( $sql->fetchAll());

    exit();

  }

  /*** Carga la lista Tipo Complejidad ***/
  function CargarTipoComplejidad(){

    $resultado = config::conectar();

    $sql = $resultado->prepare("CALL SPCARGARTIPOCOMPLEJIDAD()");

    $sql->execute();

    $sql->setFetchMode(PDO::FETCH_ASSOC);

    header("HTTP/1.1 200 OK");

    echo json_encode( $sql->fetchAll());

    exit();
    
  }

  /*** Agregar Ticket ***/
  function AgregarTicket($objTicket){

    $resultado = config::conectar();

    $sql = $resultado->prepare("CALL SPAGREGARTICKET(".$objTicket->getIdEmpresa().",".$objTicket->getIdUsuario().",".$objTicket->getTipoIncidente().",'".$objTicket->getFecha()."','".$objTicket->getHora()."','".$objTicket->getDescripcion()."',".$objTicket->getComplejidad().")");
    
    $sql->execute();

    $sql->setFetchMode(PDO::FETCH_ASSOC);

    header("HTTP/1.1 200 OK");

    echo json_encode( $sql->fetchAll());

    exit();

  }

  /*** Cargar Tickets No Finalizados ***/
  function CargarTicketsNoFinalizados($pIdUsuario){

    $resultado = config::conectar();

    $sql = $resultado->prepare("CALL SPLISTARTICKETSNOFINALIZADOS($pIdUsuario)");

    $sql->execute();

    $sql->setFetchMode(PDO::FETCH_ASSOC);

    header("HTTP/1.1 200 OK");

    echo json_encode( $sql->fetchAll());

    exit();

  }

  /*** Cargar Tickets Finalizados ***/
  function CargarTicketsFinalizados($pIdUsuario){

    $resultado = config::conectar();

    $sql = $resultado->prepare("CALL SPLISTARTICKETSFINALIZADOS($pIdUsuario)");

    $sql->execute();

    $sql->setFetchMode(PDO::FETCH_ASSOC);

    header("HTTP/1.1 200 OK");

    echo json_encode( $sql->fetchAll());

    exit();

  }

}
?>