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

function usarVale(valeElemento) {
  const textoVale = valeElemento.innerText.trim();

  // Vales únicos (ainda com sessionStorage se quiser manter esse comportamento)
  const chavesUnicas = {
    "massagem de 5 min": "usado_massagem",
    "casa limpa": "usado_casalimpa"
  };

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

  // Mapeamento dos vales ilimitados para chaves do localStorage
  const valesIlimitados = {
    "capuccino na Cacau Show": "contadorValeCapuccino",
    "combo no BurguerKing": "contadorValeCombo",
    "um dia sem fazer nada": "contadorValeDiaLivre",
    "conversa de reconciliação": "contadorValeConversa",
    "almoço no Japa": "contadorValeAlmocoJapa",
    "um dia no parque": "contadorValeDiaParque",
    "almoço/janta no Outback": "contadorValeAlmocoOutback",
    "licor de qualquer sabor": "contadorValeLicor"
  };

  for (const chave in valesIlimitados) {
    if (textoVale.includes(chave)) {
      const storageKey = valesIlimitados[chave];
      let valorAtual = parseInt(localStorage.getItem(storageKey)) || 0;
      localStorage.setItem(storageKey, valorAtual + 1);
      break;
    }
  }

  mostrarMensagemIlimitado();
  atualizarQuadroUsos();
}

function atualizarQuadroUsos() {
  const vales = {
    "☕ Capuccino": "contadorValeCapuccino",
    "🍔 Combo no BK": "contadorValeCombo",
    "🛌 Dia sem fazer nada": "contadorValeDiaLivre",
    "🤝 Conversa de reconciliação": "contadorValeConversa",
    "🍣 Almoço no Japa": "contadorValeAlmocoJapa",
    "🌳 Dia no parque": "contadorValeDiaParque",
    "🥩 Outback": "contadorValeAlmocoOutback",
    "🍸 Licor": "contadorValeLicor"
  };

  let totalUsos = 0;
  let listaVales = "";

  for (const [label, key] of Object.entries(vales)) {
    const valor = parseInt(localStorage.getItem(key)) || 0;
    totalUsos += valor;
    listaVales += `<li>${label}: ${valor} vez(es)</li>`;
  }

  if (totalUsos === 0) return;

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
    <ul>${listaVales}</ul>
  `;
}

// Função para criar corações subindo aleatoriamente
function criarCoracao() {
  const container = document.getElementById('container-coracoes');
  const coracao = document.createElement('span');
  const emojis = ['❤️', '💖', '💘', '💕', '💞', '💗'];
  const emoji = emojis[Math.floor(Math.random() * emojis.length)];

  coracao.classList.add('coracao-animado');
  coracao.textContent = emoji;

  // Posição aleatória horizontal (entre 0% e 100% da largura da tela)
  coracao.style.left = Math.random() * 100 + 'vw';

  // Tamanho aleatório
  const tamanho = Math.random() * 20 + 20; // entre 20px e 40px
  coracao.style.fontSize = `${tamanho}px`;

  container.appendChild(coracao);

  // Remover após a animação
  setTimeout(() => {
    coracao.remove();
  }, 4000); // duração da animação
}

// Criar corações continuamente
setInterval(criarCoracao, 300);
