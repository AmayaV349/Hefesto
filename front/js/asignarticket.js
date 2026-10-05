$(document).ready(function () {

  if((sessionStorage.GrupoUsuario == '1') || (sessionStorage.GrupoUsuario == '2') || (sessionStorage.GrupoUsuario == '3')){

    if(typeof(sessionStorage.IdUsuario) != "undefined"){

      colocarNombreUsuario();

      // colocarFechaHora();

    }else{

      mostrarPopUpError('Por favor inicie sesión');

    }

  }else{

    mostrarPopUpError('Por favor inicie sesión');

  }

});

/*** Coloca el nombre del usuario que inicia sesion ***/
function colocarNombreUsuario(){
    $("#lblUsuario").html(sessionStorage.NombreUsuario);
}

function seleccionarTicket(elemento) {
  const detalle = document.getElementById("detalle-ticket");
  const todos = document.querySelectorAll("#lista-tickets li");
  todos.forEach(t => t.classList.remove("seleccionado"));

  elemento.classList.add("seleccionado");

  const id = elemento.dataset.id;
  const prioridad = elemento.dataset.prioridad;
  const fecha = elemento.dataset.fecha;

  const asunto = elemento.textContent.trim().split(" - ")[1];

  detalle.innerHTML = `
    <h3>Ticket #${id}</h3>
    <p><strong>Fecha:</strong> ${fecha}</p>
    <p><strong>Asunto:</strong> ${asunto}</p>
    <p><strong>Prioridad:</strong> ${prioridad}</p>
    <label for="ingeniero">Asignar a:</label>
    <select class="textBox2" id="ingeniero">
      <option>-- Seleccionar --</option>
      <option>Valentina Amaya</option>
      <option>John Granados</option>
    </select>
    <br><br>
    <button class="botonAsignar" onclick="asignarTicket(${id})">Asignar</button>
  `;
}

function asignarTicket(id) {
  const ingeniero = document.getElementById("ingeniero").value;
  if (ingeniero === "-- Seleccionar --") {
    alert("Por favor selecciona un ingeniero");
    return;
  }

  alert(`✅ Ticket #${id} asignado a ${ingeniero}`);
}

function filtrarPorPrioridad() {
  const filtro = document.getElementById("filtro").value;
  const tickets = document.querySelectorAll("#lista-tickets li");

  tickets.forEach(ticket => {
    const prioridad = ticket.dataset.prioridad;
    ticket.style.display = (filtro === "todos" || prioridad === filtro) ? "block" : "none";
  });
}

