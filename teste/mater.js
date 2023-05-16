function exibir1() {
    document.getElementById("sla1").innerText = "coisas 3b";
}

function exibir2() {
    document.getElementById("sla1").innerText = "outras coisas";
}

function exibir3() {
    document.getElementById("sla1").innerText = "piu";
}

function alternarMateria() {
    var materiaMenu = document.getElementById("materiaMenu");
    materiaMenu.classList.toggle("oculta");
}

const maBtn = document.querySelector('#butao');
const maMenu = document.querySelector('#materiaMenu');

maBtn.addEventListener('click', () => {
  maBtn.classList.toggle('active');
  maMenu.classList.toggle('no-border-bottom');
  maMenu.style.display = maBtn.classList.contains('active') ? 'block' : 'none';
});


