function exibir3d() {
  ocultarSala();
  fetch('txt/segd.txt')
    .then(response => response.text())
    .then(data => {
      document.getElementById("mensagem1a").innerText = data;
  })
  fetch('txt/terd.txt')
    .then(response => response.text())
    .then(data => {
      document.getElementById("mensagem1b").innerText = data;
    }) 
  fetch('txt/quad.txt')
    .then(response => response.text())
    .then(data => {
      document.getElementById("mensagem1c").innerText = data;
    })   
  fetch('txt/quid.txt')
    .then(response => response.text())
    .then(data => {
      document.getElementById("mensagem1d").innerText = data;
    })    
  fetch('txt/sed.txt')
    .then(response => response.text())
    .then(data => {
      document.getElementById("mensagem1e").innerText = data;
    })  

  var elemento = document.getElementById("mensagem1f");
  elemento.innerText = "3ºD";
  elemento.style.backgroundColor = "#249068";
  elemento.style.color = "white";
  elemento.style.borderRadius = '10px';
  elemento.style.pointerEvents = 'none';
  elemento.style.zIndex = '9999';
  elemento.style.position = 'relative';
  elemento.style.width = '75px';
  elemento.style.height = '34px';
  elemento.style.border = 'none';
  elemento.style.textAlign = 'center';
  elemento.style.lineHeight = '34px'; 
  elemento.style.display = "block";
}

function exibir3b() {
  ocultarSala();
  fetch('txt/segb.txt')
    .then(response => response.text())
    .then(data => {
      document.getElementById("mensagem2a").innerText = data;
  })
  fetch('txt/terb.txt')
    .then(response => response.text())
    .then(data => {
      document.getElementById("mensagem2b").innerText = data;
    }) 
  fetch('txt/quab.txt')
    .then(response => response.text())
    .then(data => {
      document.getElementById("mensagem2c").innerText = data;
    })   
  fetch('txt/quib.txt')
    .then(response => response.text())
    .then(data => {
      document.getElementById("mensagem2d").innerText = data;
    })    
  fetch('txt/seb.txt')
    .then(response => response.text())
    .then(data => {
      document.getElementById("mensagem2e").innerText = data;
    }) 

  var elemento = document.getElementById("mensagem2f");
  elemento.innerText = "3ºB";
  elemento.style.backgroundColor = "#249068";
  elemento.style.color = "white";
  elemento.style.borderRadius = '10px';
  elemento.style.pointerEvents = 'none';
  elemento.style.zIndex = '9999';
  elemento.style.position = 'relative';
  elemento.style.width = '75px';
  elemento.style.height = '34px';
  elemento.style.border = 'none';
  elemento.style.textAlign = 'center';
  elemento.style.lineHeight = '34px'; 
  elemento.style.display = "block";
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

function ocultarSala() {
  // Ocultar sala 3ºD
  document.getElementById("mensagem1a").innerText = "";
  document.getElementById("mensagem1b").innerText = "";
  document.getElementById("mensagem1c").innerText = "";
  document.getElementById("mensagem1d").innerText = "";
  document.getElementById("mensagem1e").innerText = "";
  document.getElementById("mensagem1f").style.display = "none";

  // Ocultar sala 3ºB
  document.getElementById("mensagem2a").innerText = "";
  document.getElementById("mensagem2b").innerText = "";
  document.getElementById("mensagem2c").innerText = "";
  document.getElementById("mensagem2d").innerText = "";
  document.getElementById("mensagem2e").innerText = "";
  document.getElementById("mensagem2f").style.display = "none";
}



