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