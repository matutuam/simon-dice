const secuenciaMaquina = [];
let retrasoMaquina = 0;

const secuenciaUsuario = [];
let retrasoUsuario = 0;

const $botonJugar = document.querySelector("#boton-jugar");
$botonJugar.onclick = comenzarJuego;

function comenzarJuego() {
    console.log("Funciona");
}

function turnoMaquina() {
    const $cuadros = document.querySelectorAll(".cuadro");
    const $cuadroMaquina = $cuadros[Math.floor(Math.random() * $cuadros.length)];
    secuenciaMaquina.push($cuadroMaquina);

    for (let i = 0; i < secuenciaMaquina.length; i++) {
        setTimeout(() => {
            iluminarCuadro(secuenciaMaquina[i]);
        }, retrasoMaquina);

        retrasoMaquina += 1000;
    }
}

function iluminarCuadro($cuadro) {
    $cuadro.style.opacity = 0.5;

    setTimeout(() => {
        $cuadro.style.opacity = 1;
    }, 500);
}

function habilitarInputUsuario() {
    const $cuadros = document.querySelectorAll(".cuadro");

    $cuadros.forEach($cuadro => {
        $cuadro.addEventListener("click", manejarInputUsuario);
    });
}

function manejarInputUsuario(e) {
    const $cuadroUsuario = e.target;
    secuenciaUsuario.push($cuadroUsuario);

    setTimeout(() => {
        iluminarCuadro($cuadroUsuario);
    }, retrasoUsuario);

    retrasoUsuario += 1000;
}
