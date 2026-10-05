<?php

  class config {
    //Abre la conexion con la base de datos
    function conectar(){
      $servidor = "186.116.179.252";
      $usuario = "DLL-Ingenieria";
      $password = "bs33c_TF";     
      try {
        $conexion = new PDO("mysql:host=$servidor;dbname=DLL_SOPORTE", $usuario, $password);      
        $conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        //echo ("La Conexion fue exitosa ".$conexion);
        return $conexion;
      }
     
      catch(PDOException $e)
        {
          echo "La conexión ha fallado: " . $e->getMessage();
        }
    }
    
  }

?>