/*
	OBJETIVO - quando clicarmos no botão temos que mostrar a imagem de fundo correspondente
	- passo 1 - dar um jeito de pegar o elemento HTML dos botões
	- passo 2 - dar um jeito de identificar o clique do usuário no botão
	- passo 3 - desmarcar o botão selecionado anterior
	- passo 4 - marcar o botão clicado como se estivesse selecionada
	- passo 5 - esconder a imagem anterior
	- passo 6 - fazer aparecer a imagem correspondente ao botão clicado
*/

// passo 1
const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');

botoesCarrossel.forEach((botao, indice) => {
    // passo 2 - dar um jeito de identificar o clique do usuário no botão
	botao.addEventListener('click', () => {
		
		// passo 3 - desmarcar o botão selecionado anterior
		desativarBotaoSelecionado();
		
		// passo 4 - marcar o botão clicado como se estivesse selecionado
		botao.classList.add('selecionado');

        // passo 5 - esconder a imagem ativa anterior
		esconderImagemAtiva();

        // passo 6 - fazer aparecer a imagem correspondente ao botão clicado
        mostrarImagemDeFundo(indice);
    });
});

function mostrarImagemDeFundo(indice) {
    imagens[indice].classList.add('ativa');
    botoesCarrossel[indice].classList.add('selecionado');
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}

