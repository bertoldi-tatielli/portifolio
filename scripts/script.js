// =============================
// Seleciona elementos principais
// =============================

const botao = document.getElementById('botao-tema');
const body = document.body;


// =============================
// Tema claro / escuro
// =============================

// Recupera tema salvo
const temaSalvo = localStorage.getItem('tema');

// Aplica tema salvo
temaEscuro(temaSalvo === 'dark');

function temaEscuro(tipo) {

  if (!botao) return;

  if (tipo === true) {

    body.classList.add('dark');
    botao.innerHTML = '<i class="fa-solid fa-sun"></i>';

  } else {

    body.classList.remove('dark');
    botao.innerHTML = '<i class="fa-solid fa-moon"></i>';

  }

}


// Evento do botão de tema
if (botao) {

  botao.addEventListener('click', (e) => {

    e.preventDefault();

    const isDark = body.classList.toggle('dark');

    temaEscuro(isDark);

    localStorage.setItem('tema', isDark ? 'dark' : 'claro');

  });

}

// =============================
// Scroll suave do menu
// =============================

const navLinks = document.querySelectorAll('#menu ul a.link');

navLinks.forEach(link => {

  link.addEventListener('click', function(e) {

    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));

    if (target) {

      const headerHeight = document.querySelector('header').offsetHeight;

      const targetPosition = target.offsetTop - headerHeight - 20;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });

    }

  });

});

// =============================
// Texto digitando (sem apagar)
// =============================

document.addEventListener("DOMContentLoaded", function () {

  const frases = [
    "Olá 👋",
    "Sou Tatielli Bertoldi",
    "Desenvolvedora Front-End em formação",
    "Com foco em desenvolvimento front-end,   criação de layouts e interfaces."
  ];

  const container = document.getElementById("texto-digitando");

  if (!container) return;

  let fraseIndex = 0;
  let letraIndex = 0;

  function digitar() {

    if (fraseIndex < frases.length) {

      if (letraIndex < frases[fraseIndex].length) {

        container.innerHTML += frases[fraseIndex].charAt(letraIndex);

        letraIndex++;

        setTimeout(digitar, 50);

      } else {

        container.innerHTML += "<br>";

        fraseIndex++;
        letraIndex = 0;

        setTimeout(digitar, 600);

      }

    }

  }

  digitar();

});

// =============================
// Skills dinâmicas
// =============================

document.querySelectorAll('.skill').forEach(skill => {

  const nivel = skill.getAttribute('data-nivel');
  const barra = skill.querySelector('.barra');
  const progresso = skill.querySelector('.progresso');

  if (!nivel || !barra || !progresso) return;

  // largura da barra
  progresso.style.width = nivel + '%';

  // texto do percentual
  barra.setAttribute('data-label', nivel + '%');
    
});