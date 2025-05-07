function mostrarPresentes() {
  var container = document.getElementById('present-container');
  // Alterna a visibilidade do contêiner de presentes
  container.style.display = (container.style.display === 'none' || container.style.display === '') ? 'block' : 'none';
}


function mostrarMensagem() {
  const container = document.getElementById('mensagem-container');
  container.style.display = 'flex';
  document.body.classList.add("mensagem-aberta"); // Adiciona classe no <body>
}

function fecharMensagem() {
  const container = document.getElementById('mensagem-container');
  container.style.display = 'none';
  document.body.classList.remove("mensagem-aberta"); // Remove classe do <body>
}
  
  const flores = document.getElementById('flores');
  const emojis = ['🌸', '🌼', '🌷', '🌹', '🌻', '💐'];
  
  setInterval(() => {
    flores.textContent = emojis
      .map(() => emojis[Math.floor(Math.random() * emojis.length)])
      .join('');
  }, 2000);
  
function verificarSenha() {
    const senha = prompt("(dica: Como eu te chamo amorosamente - tem duas letrinhas no final e a primeira letra é maiúscula) Digite a senha para acessar: ");
    const senhaCorreta = "Mozii";
 
    if (senha === senhaCorreta) {
      mostrarMensagem();
    } else {
      alert("Senha incorreta. Acesso negado.");
    }
  };

function abrirDisco(elemento) {
    const audio = elemento.querySelector('audio');
    const imagem = elemento.querySelector('.vinil');
  
    if (audio.paused) {
      audio.play();
      imagem.classList.add('girando');
    } else {
      audio.pause();
      imagem.classList.remove('girando');
    }
}
  