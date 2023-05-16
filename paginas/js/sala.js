function exibir3b() {
  document.getElementById("sla").innerText = "coisas 3b";
}
function exibir3d() {
  document.getElementById("sla").innerText = "outras coisas";
}
function alternarSala() {
  var salaMenu = document.getElementById("salaMenu");
  salaMenu.classList.toggle("oculta");
}

const salaBtn = document.querySelector('#sala-but');
const salaLista = document.querySelector('#salaMenu');

salaBtn.addEventListener('click', () => {
  salaBtn.classList.toggle('active');
  salaLista.classList.toggle('no-border-bottom');
  salaLista.style.display = salaBtn.classList.contains('active') ? 'block' : 'none';
});


