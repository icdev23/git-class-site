let cliques = 0;
const contador = document.getElementById("contador");

function atualizarContador() {
  contador.textContent = `Total de Cliques: ${cliques}`;
}

document.getElementById("botao").addEventListener("click", () => {
  cliques++;
  atualizarContador();
});

document.getElementById("zerar").addEventListener("click", () => {
  cliques = 0;
  atualizarContador();
});