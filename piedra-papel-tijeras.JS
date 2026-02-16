document.addEventListener("DOMContentLoaded", () => {

  const jugadorChoice = document.getElementById('jugadorChoice');
  const cpuChoice = document.getElementById('cpuChoice');

  const emojis = ['🪨', '📄', '✂️'];

  const resultado = document.getElementById('resultado');
  const marcadorJugador = document.getElementById('jugador');
  const marcadorCPU = document.getElementById('cpu');
  const body = document.body;

  let victoriasJugador = 0;
  let victoriasCPU = 0;

  // BOTONES DEL JUEGO
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
    jugadorChoice.textContent = emojis[player];
    cpuChoice.textContent = emojis[enemy];

    // Reset animaciones
    jugadorChoice.className = 'choice';
    cpuChoice.className = 'choice';

    // Reset fondo
    body.classList.remove('ganar', 'perder', 'empate');

    // EMPATE
    if (player === enemy) {
      resultado.textContent = 'Empate 🤝';
      body.classList.add('empate');
    }

    // JUGADOR GANA
    else if (
      (player === 0 && enemy === 2) ||
      (player === 1 && enemy === 0) ||
      (player === 2 && enemy === 1)
    ) {
      resultado.textContent = 'Ganaste 😄';
      victoriasJugador++;
      body.classList.add('ganar');

      if (player === 0 && enemy === 2) cpuChoice.classList.add('romper');
      if (player === 2 && enemy === 1) jugadorChoice.classList.add('cortar');
      if (player === 1 && enemy === 0) jugadorChoice.classList.add('golpe');
    }

    // CPU GANA
    else {
      resultado.textContent = 'Perdiste 😢';
      victoriasCPU++;
      body.classList.add('perder');
    }

    marcadorJugador.textContent = victoriasJugador;
    marcadorCPU.textContent = victoriasCPU;
  }

});
