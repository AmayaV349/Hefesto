$(document).ready(function () {

  if((sessionStorage.GrupoUsuario == '1') || (sessionStorage.GrupoUsuario == '2') || (sessionStorage.GrupoUsuario == '3')){

    if(typeof(sessionStorage.IdUsuario) != "undefined"){

      colocarNombreUsuario();

      colocarFechaHora();

      cargarListas('cmbTipoIncidente','1','Tipo de Incidente ...');

      cargarListas('cmbTipoComplejidad','2','Tipo Complejidad ...');

    }else{

      mostrarPopUpError('Por favor inicie sesión');

    }

  }else{

    mostrarPopUpError('Por favor inicie sesión');

  }

  $("#btnAcePop1").click(function() {
          
      window.location = "../html/ticket.html";
      
  });

  $("#btnAcePop2").click(function() {
          
      window.location = "../html/login.html";
      
  });

  $("#btnGuardar").click(function() {
          
      ValidarCampos();
      
  });
  
});

/*** Valida que los campos no estén vacios y guarda ***/
function ValidarCampos() {
    if(($("#cmbTipoIncidente option:selected").val() == 0) || ($("#cmbTipoComplejidad option:selected").val() == 0)){
        mostrarPopUpAdvertencia('Por favor diligencie todas las listas');
    }else{
        if($("#txtDescripcion").val() == ""){
            mostrarPopUpAdvertencia('Por favor describa el incidente');
        }else{
            $("#btnGuardar").hide();
            $.ajax({
                url: '../../servicio/ticket.php',
                type: 'PUT',
                data: {
                    pIdEmpresa: sessionStorage.IdEmpresa,
                    pIdUsuario: sessionStorage.IdUsuario,
                    pTipoIncidente: $("#cmbTipoIncidente option:selected").val(),
                    pFecha: $("#txtFecha").val(),
                    pHora: $("#txtHora").val(),
                    pDescripcion: $("#txtDescripcion").val(),
                    pComplejidad: $("#cmbTipoComplejidad option:selected").val(),
                    pServicio: 1,
                },
                //dataType: 'json',
                async :false,
            }).done(function(data){
              var content = JSON.parse(data);
              if (content[0].pResultado == 'A') {
                mostrarPopUpOk('El ticket fue creado de manera correcta');
              }else{
                mostrarPopUpAdvertencia('Algo salió mal y el ticket no fue creado');
              }
            }, "json");  
        }
    }

}

/*** Coloca el nombre del usuario que inicia sesion ***/
function colocarNombreUsuario(){
    $("#lblUsuario").html(sessionStorage.NombreUsuario);
}

/*** Da formato a la fecha y hora y los coloca en los campos ***/
function colocarFechaHora(){
    let date = new Date();
    let mes = date.getUTCMonth();
    mes = parseInt(mes) + 1;
    if(mes < 10){
      mes = '0'+mes;
    }
    $("#txtFecha").val(date.getFullYear()+'-'+mes+'-'+date.getDate());
    $("#txtHora").val(date.getHours()+':'+date.getMinutes());
}

/*** Consulta en la base de datos los valores de las listas ***/ 
function cargarListas(objeto,servicio,texto) {
    $.ajax({
          url: '../../servicio/ticket.php',
          type: 'POST',
          data: {"pServicio":servicio},
          dataType: 'json',
          async :false,
      }).done(function(data) {
        if (data !== 0) {
            formarOptionValueLista(data,objeto,texto);
        }
        else {
            alert('error');
        }
    }, "json");
}

/*** Llena las listas ***/ 
function formarOptionValueLista(data,objeto,texto) {
    $('#'+objeto).find('option').remove();
    SetParametroCursoPorDefecto("#"+objeto, '0', texto);
    for (i = 0; i < data.length; i++) {
        $('#'+objeto).append($('<option>', {
            value: data[i].Id,
            text: data[i].Nombre
        }));
    }
} 

/*** Establece los valores por defecto de las listas a Seleccione... ***/
function SetParametroCursoPorDefecto(atributo, valor, texto) {
    $(atributo).append($('<option>', {
        value: valor,
        text: texto
    }));
}

/*** Muestra el PopUp Error ***/ 
function mostrarPopUpError(mensaje) {
    $("#lblMensaje2").html(mensaje);
    $('#popup_mensaje_error').bPopup({
        speed: 450,
        transition: 'slideDown'
    });
}

/*** Muestra el PopUp Advertencia ***/ 
function mostrarPopUpAdvertencia(mensaje) {
    $("#lblMensaje3").html(mensaje);
    $('#popup_mensaje_advertencia').bPopup({
        speed: 450,
        transition: 'slideDown'
    });
}

/*** Muestra el PopUp Advertencia ***/ 
function mostrarPopUpOk(mensaje) {
    $("#lblMensaje1").html(mensaje);
    $('#popup_mensaje_ok').bPopup({
        speed: 450,
        transition: 'slideDown'
    });
}

//*** Cierra la sesion ***/ 
function cerrarSesion() {
  // Limpia datos de sesión si usas localStorage/sessionStorage
  localStorage.clear();
  sessionStorage.clear();
  // Redirige al inicio
  window.location.href = "login.html"; 
}
 