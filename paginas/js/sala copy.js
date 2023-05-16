function exibir3d() {
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
}

function exibir3b() {
  fetch('muita.txt')
  .then(response => response.text())
  .then(data => {
    document.getElementById("mensagem2a").innerText = data;
  })
  fetch('coisa.txt')
    .then(response => response.text())
    .then(data => {
      document.getElementById("mensagem2b").innerText = data;
    }) 
  fetch('nao.txt')
    .then(response => response.text())
    .then(data => {
      document.getElementById("mensagem2c").innerText = data;
    })   
  fetch('aguento.txt')
    .then(response => response.text())
    .then(data => {
      document.getElementById("mensagem2d").innerText = data;
    })    
  fetch('mais.txt')
    .then(response => response.text())
    .then(data => {
      document.getElementById("mensagem2e").innerText = data;
    })
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


