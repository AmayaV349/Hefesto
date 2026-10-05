<?php

    class generaqr_propiedades {

        private $IdAsistente;

        private $IdAlimentacionEvento;

        public function __construct($IdAsistente,$IdAlimentacionEvento){

            $this->IdAsistente = $IdAsistente;

            $this->IdAlimentacionEvento = $IdAlimentacionEvento;
        }

        public function getIdAsistente(){

            return $this->IdAsistente;
        }

        public function getIdAlimentacionEvento(){

            return $this->IdAlimentacionEvento;
        }

    }
?>