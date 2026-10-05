<?php

    class login_propiedades {

        private $Login;

        private $Contrasena;

        public function __construct($Login,$Contrasena){

            $this->Login = $Login;

            $this->Contrasena = $Contrasena;
        }

        public function getLogin(){

            return $this->Login;
        }

        public function getContrasena(){

            return $this->Contrasena;
        }

    }
?>