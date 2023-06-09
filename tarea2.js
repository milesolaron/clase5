const $enviar = document.querySelector('#enviar-b');

$enviar.onclick = function(event) {
  event.preventDefault(); // Evita que el formulario se envíe y la página se recargue
  mostrarDatos();
};

function mostrarDatos() {
    const primerNombre = document.querySelector('#nombre').value;
    const segundoNombre = document.querySelector('#segundo-nombre').value;
    const apellido = document.querySelector('#apellido').value;
    const edad = document.querySelector('#edad').value;
  
    document.querySelector("#bienvenido").innerText = `¡Bienvenido, ${primerNombre}!`;
    document.querySelector("#nombre-dato").innerText = `Primer nombre: ${primerNombre}`;
    document.querySelector("#segundo-nombre-dato").innerText = `Segundo nombre: ${segundoNombre}`;
    document.querySelector("#apellido-dato").innerText = `Apellido/s: ${apellido}`;
    document.querySelector("#edad-dato").innerText = `Edad: ${edad}`;
  }
  
