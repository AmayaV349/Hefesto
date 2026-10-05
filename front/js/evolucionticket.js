
function seleccionarTicketEvo(elemento) {
  const detalle = document.getElementById("detalle-ticket");
  const todos = document.querySelectorAll("#lista-tickets li");
  todos.forEach(t => t.classList.remove("seleccionado"));

  elemento.classList.add("seleccionado");

  const id = elemento.dataset.id;
  const empresa = elemento.dataset.empresa;
  const fecha = elemento.dataset.fecha;

  const asunto = elemento.textContent.trim().split(" - ")[1];

  detalle.innerHTML = `
    <h3>Ticket #${id}</h3>
    <p><strong>Fecha:</strong> ${fecha}</p>
    <p><strong>Asunto:</strong> ${asunto}</p>
    <p><strong>Empresa:</strong> ${empresa}</p>
    <label for="estado">Estado:</label>
    <select class="textBox2" id="estado">
      <option>-- Seleccionar --</option>
        <option>Nuevo</option>
        <option>Pendiente</option>
        <option>En gestión</option>
        <option>En espera</option>
        <option>Escalado</option>
        <option>Resuelto</option>
        <option>Cancelado</option>
    </select>
    <br><br>
    <form action="/submit-login" method="post">
        <form method="post" action="/send/">
            <textarea class="textBox1" id="txtEvolucion" cols="60" rows="6" tabindex="3" maxlength="5000"></textarea>
        </form>
        <!-- placeholder="Detalles sobre el motivo de la creacion del ticket." -->
    </form>
    <div class="contenedor-botonesEvolucion">
    <button class="botonGuardar" onclick="cambiarEstado(${id}) ">Guardar</button>
    <button class="botonFinalizar">Finalizar Ticket</button>
    <div>

  `;
}

function cambiarEstado(id) {
  const estado = document.getElementById("estado").value;
  if (estado === "-- Seleccionar --") {
    alert("Por favor selecciona un estado");
    return;
  }

  alert(`✅ Estado #${id} cambio a ${estado}`);
}

function filtrarPorEmpresa() {
  const filtro = document.getElementById("filtro").value;
  const tickets = document.querySelectorAll("#lista-tickets li");

  tickets.forEach(ticket => {
    const empresa = ticket.dataset.empresa;
    ticket.style.display = (filtro === "todos" || empresa === filtro) ? "block" : "none";
  });
}