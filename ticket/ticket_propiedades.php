<?php

    class ticket_propiedades {

        private $pIdEmpresa;

        private $pIdUsuario;

        private $pTipoIncidente;

        private $pFecha;

        private $pHora;

        private $pDescripcion;

        private $pComplejidad;

        public function __construct($pIdEmpresa,$pIdUsuario,$pTipoIncidente,$pFecha,$pHora,$pDescripcion,$pComplejidad){

            $this->pIdEmpresa = $pIdEmpresa;

            $this->pIdUsuario = $pIdUsuario;

            $this->pTipoIncidente = $pTipoIncidente;

            $this->pFecha = $pFecha;

            $this->pHora = $pHora;

            $this->pDescripcion = $pDescripcion;

            $this->pComplejidad = $pComplejidad;
        }

        public function getIdEmpresa(){

            return $this->pIdEmpresa;
        }

        public function getIdUsuario(){

            return $this->pIdUsuario;
        }

        public function getTipoIncidente(){

            return $this->pTipoIncidente;
        }

        public function getFecha(){

            return $this->pFecha;
        }

        public function getHora(){

            return $this->pHora;
        }

        public function getDescripcion(){

            return $this->pDescripcion;
        }

        public function getComplejidad(){

            return $this->pComplejidad;
        }

    }
?>