// 1. Seleciona o botão de tema no DOM
const themeToggleBtn = document.getElementById('theme-toggle');

// 2. Escuta o evento de clique no botão
themeToggleBtn.addEventListener('click', () => {
  // Verifica se o tema atual é dark
  const currentTheme = document.documentElement.getAttribute('data-theme');
  
  if (currentTheme === 'dark') {
    // Se estiver escuro, remove o atributo para voltar ao tema claro
    document.documentElement.removeAttribute('data-theme');
    themeToggleBtn.textContent = '🌙'; // Altera o ícone para lua
  } else {
    // Se estiver claro, ativa o modo escuro
    document.documentElement.setAttribute('data-theme', 'dark');
    themeToggleBtn.textContent = '☀️'; // Altera o ícone para sol
  }
});

// Lógica para Copiar para a Área de Transferência
document.querySelectorAll('.contact-card.copyable').forEach(card => {
  const btn = card.querySelector('.btn-copy');
  const textToCopy = card.getAttribute('data-copy');

  btn.addEventListener('click', (e) => {
    e.preventDefault(); // Evita navegar ao clicar no botão
    e.stopPropagation();

    navigator.clipboard.writeText(textToCopy).then(() => {
      // Feedback visual momentâneo
      btn.classList.add('copied');
      btn.innerHTML = `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>`;

      setTimeout(() => {
        btn.classList.remove('copied');
        btn.innerHTML = `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>`;
      }, 2000);
    });
  });
});