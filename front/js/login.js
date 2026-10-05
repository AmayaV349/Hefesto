$(document).ready(function (){

    $("#btnIngresar").click(function() {
        
        IniciarSesion();
        
    });

});

function IniciarSesion() {

    if(($("#txtUsername").val() == "") || ($("#txtPassword").val() == "")){

        mostrarPopUpAdvertencia('Diligencie todos los campos');

    }else{

        $.ajax({

            url: '../../servicio/login.php',

            type: 'POST',

            data: {

                pUsuario: $("#txtUsername").val(),

                pPasswd: md5($("#txtPassword").val()),

                servicio: 1,

            },

            async :false,

        }).done(function(data){

            if (data !== '[]'){

                var content = JSON.parse(data);

                sessionStorage.IdUsuario = content[0].Id;

                sessionStorage.NombreUsuario = content[0].Nombre;

                sessionStorage.GrupoUsuario = content[0].IdGrupo;

                sessionStorage.IdEmpresa = content[0].IdEmpresa;

                sessionStorage.Empresa = content[0].Empresa;

                sessionStorage.Usuario = $("#txtUsername").val();

                switch(sessionStorage.GrupoUsuario) {

                    case '1':

                      window.location = "../html/ticket.html";

                    break;

                    case '2':

                      

                    break;

                    case '3':

                      window.location = "../html/ticket.html";

                    break;

                    case '4':

                      
                      
                    break;
                    
                  }

            }else{

                mostrarPopUpError('El Usuario o la Contraseña son incorrectos');

            }

        });

    }

}

//----- Muestra el PopUp -----//
function mostrarPopUpOk(mensaje) {

    $("#lblMensaje1").html(mensaje);

    $('#popup_mensaje_ok').bPopup({

        speed: 450,

        transition: 'slideDown'

    });

}

//----- Muestra el PopUp -----//
function mostrarPopUpError(mensaje) {

    $("#lblMensaje2").html(mensaje);

    $('#popup_mensaje_error').bPopup({

        speed: 450,

        transition: 'slideDown'

    });

}

//----- Muestra el PopUp -----//
function mostrarPopUpAdvertencia(mensaje) {

    $("#lblMensaje3").html(mensaje);

    $('#popup_mensaje_advertencia').bPopup({

        speed: 450,

        transition: 'slideDown'

    });

}

//----------Año Copyright------//
    document.querySelector(".copyright-year").textContent = new Date().getFullYear();
