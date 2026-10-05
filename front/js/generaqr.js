$(document).ready(function () {

	$("#btnGeneraQR").click(function(){
        
      btnGeneraQR();

    });
	
});

//----- Genera todos los codigos QR de un evento -----//
function btnGeneraQR() {

    $.ajax({

          url: '../../servicio/generaqr.php',

          type: 'POST',

          data: {"pServicio":1},

          dataType: 'json',

          async :false,

      }).done(function(data) {

        if (data !== 0) {

            formarOptionValueLista(data,objeto,texto);

        }else {

            alert('error');

        }

    }, "json");

}