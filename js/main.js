function mostrarPresentes() {
  var container = document.getElementById('present-container');
  // Alterna a visibilidade do contêiner de presentes
  container.style.display = (container.style.display === 'none' || container.style.display === '') ? 'block' : 'none';
}

function fecharPresentes() {
  const container = document.getElementById('present-container');
  container.style.display = 'none';
  document.body.classList.remove("present-aberta"); // Remove classe do <body>
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

function verificarVales() {
  const senha = prompt("(dica: Como que pede com educação? - Primeira letra é maiúscula.) Digite a senha para acessar: ");
  const senhaCorreta = "Por favor";
  const senhaCorreta02 = "Pfv";
  
 
  if (senha === senhaCorreta || senha === senhaCorreta02) {
    mostrarPresentes();
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

function mostrarMensagemIlimitado() {
  const overlay = document.getElementById('overlay-notificacao');
  overlay.classList.remove('escondido');

  setTimeout(() => {
    overlay.classList.add('escondido');
  }, 3000);
}


// Contadores de vales ilimitados
let contadorValeCapuccino = 0;
let contadorValeCombo = 0;
let contadorValeDiaLivre = 0;
let contadorValeConversa = 0;
let contadorValeAlmocoJapa = 0;
let contadorValeDiaParque = 0;
let contadorValeAlmocoOutback = 0;
let contadorValeLicor = 0;

function usarVale(valeElemento) {
  const textoVale = valeElemento.innerText.trim();

  // Chaves únicas para os vales especiais
  const chavesUnicas = {
    "massagem de 5 min": "usado_massagem",
    "casa limpa": "usado_casalimpa"
  };

  // Verifica se é um vale único
  for (const chave in chavesUnicas) {
    if (textoVale.includes(chave)) {
      if (sessionStorage.getItem(chavesUnicas[chave]) === "true") {
        alert("Este vale já foi usado nesta sessão.");
        return;
      }

      const confirmar = confirm("Esse vale só pode ser usado uma vez por sessão. Deseja continuar?");
      if (confirmar) {
        valeElemento.classList.add('usado');
        sessionStorage.setItem(chavesUnicas[chave], "true");
      }
      return;
    }
  }

  // Vales ilimitados
  if (textoVale.includes("capuccino na Cacau Show")) contadorValeCapuccino++;
  if (textoVale.includes("combo no BurguerKing")) contadorValeCombo++;
  if (textoVale.includes("um dia sem fazer nada")) contadorValeDiaLivre++;
  if (textoVale.includes("conversa de reconciliação")) contadorValeConversa++;
  if (textoVale.includes("almoço no Japa")) contadorValeAlmocoJapa++;
  if (textoVale.includes("um dia no parque")) contadorValeDiaParque++;
  if (textoVale.includes("almoço/janta no Outback")) contadorValeAlmocoOutback++;
  if (textoVale.includes("licor de qualquer sabor")) contadorValeLicor++;

  mostrarMensagemIlimitado();
  atualizarQuadroUsos();
}



function atualizarQuadroUsos() {
  const totalUsos = contadorValeCapuccino + contadorValeCombo + contadorValeDiaLivre +
                    contadorValeConversa + contadorValeAlmocoJapa + contadorValeDiaParque +
                    contadorValeAlmocoOutback + contadorValeLicor;

  if (totalUsos === 0) return; // Não exibe o quadro se nenhum vale foi usado

  let quadro = document.getElementById('quadro-usos');
  if (!quadro) {
    quadro = document.createElement('div');
    quadro.id = 'quadro-usos';
    quadro.className = 'quadro-usos';
    const container = document.querySelector('.vales-container');
    container.insertAdjacentElement('afterend', quadro);
  }

  quadro.innerHTML = `
    <h3>📊 Uso dos Vales Ilimitados:</h3>
    <ul>
      <li>☕ Capuccino: ${contadorValeCapuccino} vez(es)</li>
      <li>🍔 Combo no BK: ${contadorValeCombo} vez(es)</li>
      <li>🛌 Dia sem fazer nada: ${contadorValeDiaLivre} vez(es)</li>
      <li>🤝 Conversa de reconciliação: ${contadorValeConversa} vez(es)</li>
      <li>🍣 Almoço no Japa: ${contadorValeAlmocoJapa} vez(es)</li>
      <li>🌳 Dia no parque: ${contadorValeDiaParque} vez(es)</li>
      <li>🥩 Outback: ${contadorValeAlmocoOutback} vez(es)</li>
      <li>🍸 Licor: ${contadorValeLicor} vez(es)</li>
    </ul>
  `;
}

