<?php
include "../servicio/ado/config.php";

class login_manager {

  function ingresar($pUsuario, $pPasswd){

    $resultado = config::conectar();

    //echo ("<br>El resultado es: ".$resultado);

    $sql = $resultado->prepare("CALL SPINGRESAR('$pUsuario', '$pPasswd')");

    $sql->execute();

    $sql->setFetchMode(PDO::FETCH_ASSOC);

    header("HTTP/1.1 200 OK");

    echo json_encode( $sql->fetchAll()  );

    exit();
  }

}
?>