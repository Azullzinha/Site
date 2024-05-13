const botao = document.getElementById('botao');
  const conteudo = document.getElementById('conteudo');

botao.addEventListener('click', function() {
    conteudo.style.display = 'block';
    botao.style.display = 'none';
});