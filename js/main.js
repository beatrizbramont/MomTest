function mostrarMensagem() {
    document.getElementById('mensagem-container').style.display = 'flex';
  }
  
  function fecharMensagem() {
    document.getElementById('mensagem-container').style.display = 'none';
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

