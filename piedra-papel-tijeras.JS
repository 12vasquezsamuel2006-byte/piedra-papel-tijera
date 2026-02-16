const jugadorChoice = document.getElementById('jugadorChoice');
const cpuChoice = document.getElementById('cpuChoice');

const emojis = ['🪨', '📄', '✂️'];

const resultado = document.getElementById('resultado');
const marcadorJugador = document.getElementById('jugador');
const marcadorCPU = document.getElementById('cpu');
const body = document.body;

let victoriasJugador = 0;
let victoriasCPU = 0;

// BOTONES
document.getElementById('piedra').addEventListener('click', () => jugar(0));
document.getElementById('papel').addEventListener('click', () => jugar(1));
document.getElementById('tijera').addEventListener('click', () => jugar(2));

// MODAL
const modal = document.getElementById('modal');
document.getElementById('cerrarModal').addEventListener('click', () => {
  modal.style.display = 'none';
});

// FUNCIÓN PRINCIPAL
function jugar(player) {
  const enemy = Math.floor(Math.random() * 3);

  // Mostrar elecciones
  jugadorChoice.innerText = emojis[player];
  cpuChoice.innerText = emojis[enemy];

  // Limpiar animaciones anteriores
  jugadorChoice.className = 'choice';
  cpuChoice.className = 'choice';

  // Limpiar fondo
  body.classList.remove('ganar', 'perder', 'empate');

  // EMPATE
  if (player === enemy) {
    resultado.innerText = 'Empate 🤝';
    body.classList.add('empate');
  }

  // JUGADOR GANA
  else if (
    (player === 0 && enemy === 2) ||
    (player === 1 && enemy === 0) ||
    (player === 2 && enemy === 1)
  ) {
    resultado.innerText = 'Ganaste 😄';
    victoriasJugador++;
    body.classList.add('ganar');

    // ANIMACIONES CUANDO GANA EL JUGADOR
    if (player === 0 && enemy === 2) {
      cpuChoice.classList.add('romper'); // tijera se rompe
    }

    if (player === 2 && enemy === 1) {
      jugadorChoice.classList.add('cortar'); // tijera corta papel
    }

    if (player === 1 && enemy === 0) {
      jugadorChoice.classList.add('golpe'); // papel envuelve piedra
    }
  }

  // CPU GANA
  else {
    resultado.innerText = 'Perdiste 😢';
    victoriasCPU++;
    body.classList.add('perder');
  }

  // Actualizar marcador
  marcadorJugador.innerText = victoriasJugador;
  marcadorCPU.innerText = victoriasCPU;
}
