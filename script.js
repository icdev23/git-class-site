let cliques = 0;

document.getElementById("botao").addEventListener("click", () => {
  cliques++;
  document.getElementById("contador").textContent = `Total de Cliques: ${cliques}`;
});

document.getElementById("zerar").addEventListener("click", () => {
  cliques = 0;
  document.getElementById("contador").textContent = `Total de Cliques: ${cliques}`;
});