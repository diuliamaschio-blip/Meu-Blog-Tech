const botaoTema = document.getElementById('toggle-tema');

botaoTema.addEventListener('click', () => {
    document.body.classList.toggle('tema-escuro');
    
    if (document.body.classList.contains('tema-escuro')) {
        botaoTema.textContent = '☀️';
    } else {
        botaoTema.textContent = '🌙';
    }
});
