
// funcion de los botones de la barra 
function openSection(sectionId) {
    // Ocultar todas las secciones
    var sections = document.querySelectorAll('.seccion');
    sections.forEach(function(section) {
        section.classList.add('hidden');
    });

    // Mostrar la sección deseada
    var sectionToShow = document.getElementById(sectionId);
    sectionToShow.classList.remove('hidden');

    /*** Para los estados ***/
    if(sectionId == 'estado'){
        document.getElementById('divTicktes').innerHTML = '';
        generarTarjetas();
    }

    /*** Para el historial ***/
    if(sectionId == 'historial'){
        document.getElementById("tabla-tickets").querySelector("tbody").innerHTML="";
        generarHistorial();
    }
}

function seleccionarOpcion() {
    // Obtener el elemento select y el div de resultado
    var select = document.getElementById("opciones");
    var resultadoDiv = document.getElementById("resultado");

    // Obtener el valor seleccionado
    var opcionSeleccionada = select.value;

    // Mostrar el resultado seleccionado
    if (opcionSeleccionada) {
        resultadoDiv.innerHTML = "<p>Opción seleccionada: " + opcionSeleccionada + "</p>";
    } else {
        resultadoDiv.innerHTML = "<p>Por favor, selecciona una opción.</p>";
    }
}
// TARJETAS ESTADO SOLICITUD
  function toggleInfo(id, btn) {
    const info = document.getElementById('info-' + id);
    const card = document.getElementById('card-' + id);
    const isOpen = info.style.display === 'block';

    if (isOpen) {
      info.style.display = 'none';
      card.classList.remove('active');
      btn.innerText = 'Ver más';
    } else {
      document.querySelectorAll('.extra-info').forEach(el => el.style.display = 'none');
      document.querySelectorAll('.card').forEach(c => c.classList.remove('active'));
      document.querySelectorAll('.btn-view').forEach(b => b.innerText = 'Ver más');

      info.style.display = 'block';
      card.classList.add('active');
      btn.innerText = 'Ocultar';
    }
  }

  function actualizarEstado(id) {
    alert("Actualizar estado de la solicitud #" + id);
  }

  
  function cancelarTicket(id, btn) {
    const confirmar = confirm(`¿Estás segura de que deseas cancelar el ticket TCK-${id}?`);
    if (confirmar) {
      const card = btn.closest('.card');
      const chip = card.querySelector('.status-chip');

      chip.className = 'status-chip cancelado';
      chip.textContent = 'Cancelado';

      // Desactiva los botones
      const botones = card.querySelectorAll('button');
      botones.forEach(boton => boton.disabled = true);

      alert(`Ticket TCK-${id} ha sido cancelado exitosamente.`);
    }
  }



// HISTORIAL DE TICKETS
function toggleDetalles(fila) {
  const detalles = fila.nextElementSibling;
  detalles.style.display = detalles.style.display === "table-row" ? "none" : "table-row";

}

/*** Genera las tarjetas por cada Ticket ***/
function generarTarjetas(){
  $.ajax({
    url: '../../servicio/ticket.php',
    type: 'POST',
    data: {
      pIdUsuario: sessionStorage.IdUsuario,
      pServicio: 3,
    },
    //dataType: 'json',
    async :false,
  }).done(function(data){
    var content = JSON.parse(data);
    let codigo = '';
    let prefijo = '';
    if (Object.keys(content).length > 0) {
      for(let i = 1;i <= Object.keys(content).length;i++){
        codigo = content[i-1].Id;
        switch(codigo){
          case codigo > 9:
            prefijo = 'TCK-00'
            break;
          case codigo > 99:
            prefijo = 'TCK-0'
            break;
          default:
            prefijo = 'TCK-000';
        }
        codigo = prefijo + codigo
        $('<div class="card" id="'+content[i-1].Id+'"> \
            <span class="status-chip nuevo">'+content[i-1].Estado+'</span> \
              <h3>'+codigo+' - T.Incidente: '+content[i-1].TipoIncidente+'</h3> \
            <p><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7ab400" \
                stroke-width="2" stroke-linecap="round" stroke-linejoin="round" \
                class="icon icon-tabler icons-tabler-outline icon-tabler-calendar-week"> \
                <path stroke="none" d="M0 0h24v24H0z" fill="none" /> \
                <path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z" /> \
                <path d="M16 3v4" /> \
                <path d="M8 3v4" /> \
                <path d="M4 11h16" /> \
                <path d="M7 14h.013" /> \
                <path d="M10.01 14h.005" /> \
                <path d="M13.01 14h.005" /> \
                <path d="M16.015 14h.005" /> \
                <path d="M13.015 17h.005" /> \
                <path d="M7.01 17h.005" /> \
                <path d="M10.01 17h.005" /> \
              </svg>'+content[i-1].Fecha+'</p> \
            <p><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7ab400" \
                stroke-width="2" stroke-linecap="round" stroke-linejoin="round" \
                class="icon icon-tabler icons-tabler-outline icon-tabler-exclamation-circle"> \
                <path stroke="none" d="M0 0h24v24H0z" fill="none" /> \
                <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /> \
                <path d="M12 9v4" /> \
                <path d="M12 16v.01" /> \
              </svg> Prioridad: '+content[i-1].Prioridad+'</p> \
            <div class="avatar"> \
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7ab400" \
                stroke-width="2" stroke-linecap="round" stroke-linejoin="round" \
                class="icon icon-tabler icons-tabler-outline icon-tabler-user-hexagon"> \
                <path stroke="none" d="M0 0h24v24H0z" fill="none" /> \
                <path d="M12 13a3 3 0 1 0 0 -6a3 3 0 0 0 0 6z" /> \
                <path d="M6.201 18.744a4 4 0 0 1 3.799 -2.744h4a4 4 0 0 1 3.798 2.741" /> \
                <path \
                  d="M19.875 6.27c.7 .398 1.13 1.143 1.125 1.948v7.284c0 .809 -.443 1.555 -1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1 -2.184 0l-6.75 -4.27a2.225 2.225 0 0 1 -1.158 -1.948v-7.285c0 -.809 .443 -1.554 1.158 -1.947l6.75 -3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033z" /> \
              </svg> \
              <span>'+content[i-1].Ingeniero+'</span> \
            </div> \
            <div class="actions"> \
              <button class="btn btn-view" onclick="toggleInfo('+content[i-1].Id+', this)">Ver más</button> \
              <!-- <button class="btn btn-update" onclick="actualizarEstado('+content[i-1].Id+')">Actualizar</button> -->\
              <button class="btn btn-cancel" onclick="cancelarTicket('+content[i-1].Id+', this)">Cancelar</button> \
            </div> \
            <div class="extra-info" id="info-'+content[i-1].Id+'"> \
              <p><strong>Descripción:</strong>'+content[i-1].Descripcion+'</p> \
              <p><strong>Historial:</strong>'+content[i-1].Avance+'</p> \
            </div> \
          </div>').appendTo("#divTicktes");
      }
    }else{
      mostrarPopUpAdvertencia('No existen tickets');
    }
  }, "json");
}

/*** Genera el historial de los Tickets resueltos ***/
function generarHistorial(){
  $.ajax({
    url: '../../servicio/ticket.php',
    type: 'POST',
    data: {
      pIdUsuario: sessionStorage.IdUsuario,
      pServicio: 4,
    },
    //dataType: 'json',
    async :false,
  }).done(function(data){
    var content = JSON.parse(data);
    let codigo = '';
    let prefijo = '';
    if (Object.keys(content).length > 0) {
      for(let i = 1;i <= Object.keys(content).length;i++){
        codigo = content[i-1].Id;
        switch(codigo){
          case codigo > 9:
            prefijo = 'TCK-00'
            break;
          case codigo > 99:
            prefijo = 'TCK-0'
            break;
          default:
            prefijo = 'TCK-000';
        }
        codigo = prefijo + codigo
        $('<tr class="expandable" onclick="toggleDetalles(this)"> \
            <td>'+codigo+'</td> \
            <td>'+content[i-1].Fecha+'</td> \
            <td>'+sessionStorage.Usuario+'</td> \
            <td>'+content[i-1].TipoIncidente+'</td> \
            <td>'+content[i-1].Estado+'</td> \
          </tr> \
          <tr class="details-row"> \
            <td colspan="5" class="details-content"> \
              <strong>Ingeniero asignado: </strong>'+content[i-1].Ingeniero+'<br> \
              <strong>Prioridad: </strong>'+content[i-1].Prioridad+'<br> \
              <strong>Acciones: </strong>'+content[i-1].Avance+'<br> \
              <strong>Fecha de cierre: </strong>'+content[i-1].FechaCierre+' \
            </td> \
          </tr>').appendTo("#tabla-tickets");
      }
    }else{
      mostrarPopUpAdvertencia('No existen tickets');
    }
  }, "json");
}
