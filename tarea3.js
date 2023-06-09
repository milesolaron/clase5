const $calcular = document.querySelector("#calcular");
const $resultado = document.querySelector("p");

$calcular.onclick = function(event) {
    event.preventDefault();
    ocultarResultado();

    const $horas = document.querySelectorAll(".horas");
    const $minutos = document.querySelectorAll(".minutos");
    const $segundos = document.querySelectorAll(".segundos");

    let horas = sumarValores($horas);
    let minutos = sumarValores($minutos);
    let segundos = sumarValores($segundos);

    minutos += Math.floor(segundos / 60);
    segundos %= 60;
    horas += Math.floor(minutos / 60);
    minutos %= 60;

    document.querySelector("#horas-p").textContent = horas + ' horas.';
    document.querySelector("#minutos-p").textContent = minutos + ' minutos.';
    document.querySelector("#segundos-p").textContent = segundos + ' segundos.';

    mostrarResultado();
}

function sumarValores($elementos) {
    return Array.from($elementos).reduce((total, elemento) => total + Number(elemento.value), 0);
}

function mostrarResultado() {
    $resultado.classList.remove("oculto");
}

function ocultarResultado() {
    $resultado.classList.add("oculto");
}
