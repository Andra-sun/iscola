function exibir3b() {
    document.getElementById("sla").innerText = "coisas 3b";
}

function exibir3d() {
    document.getElementById("sla").innerText = "outras coisas";
}

function alternarSala() {
    var barraMenu = document.getElementById("salaMenu");
    barraMenu.classList.toggle("oculta");
}