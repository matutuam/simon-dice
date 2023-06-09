let puntos = 0;
let patronMaquina = [];
let patronUsuario = [];

const $botonJugar = document.querySelector('#boton-jugar');

$botonJugar.onclick = comenzarJuego;

function comenzarJuego() {
    reiniciarTurno();
    reiniciarPuntos();
    manejarJuego();
}

function manejarJuego() {
    turnoMaquina();
}

function turnoMaquina() {
    const cuadroMaquina = elegirCuadroAleatorio();
    patronMaquina.push(cuadroMaquina);
    resaltarCuadro(cuadroMaquina);
}

function elegirCuadroAleatorio() {
    const $cuadros = document.querySelectorAll('.cuadro');
    const $cuadro = $cuadros[Math.floor(Math.random() * $cuadros.length)];
    return $cuadro;
}

function resaltarCuadro(cuadro) {
    setTimeout(() => {
        cuadro.style.opacity = 0.5;
    
        setTimeout(() => {
            cuadro.style.opacity = 1;
        }, 500);
    }, 500);
}

function reiniciarTurno() {
    document.querySelector('#turno').textContent = ``;
}

function reiniciarPuntos() {
    puntos = 0;
}
