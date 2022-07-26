var altura = 0;
var largura = 0;
var vidas = 1;
var tempo = 15;

var nivel = window.location.search;
nivel = nivel.replace('?', '');

switch(nivel) {
	case 'facil':
		nivel = 1500;
		break;
	case 'medio':
		nivel = 1000;
		break;
	case 'dificil':
		nivel = 750;
		break;	
};

function ajustarTamanhoTela(){
	altura = window.innerHeight;
	largura = window.innerWidth;
	console.log(largura, altura);
};

ajustarTamanhoTela();

var cronometro = setInterval(function() {
	if(tempo <= 0) {
		clearInterval(cronometro);
		clearInterval(criarMosca);
		window.location.href = 'vitoria.html'
	} else {
	tempo -= 1;
	document.getElementById('cronometro').innerHTML = tempo;
	}	
}, 1000);




function posicaoRandomica() {


if(document.getElementById('mosquito')) {
	document.getElementById('mosquito').remove();

	if(vidas > 3) {
		window.location.href="fim-de-jogo.html"
	} else {

	document.getElementById('vida' + vidas).src = 'imagens/coracao_vazio.png';
	vidas ++

	}
};

var posicaoMosquitoX = Math.floor((Math.random() * largura) - 90);
var posicaoMosquitoY = Math.floor((Math.random() * altura) - 90);

posicaoMosquitoX = posicaoMosquitoX <= 50 ? 0 : posicaoMosquitoX;
posicaoMosquitoY = posicaoMosquitoY <= 50 ? 0 : posicaoMosquitoY;

console.log(posicaoMosquitoX, posicaoMosquitoY);

//CRIAR O ELEMENTO HTML
var mosquito = document.createElement('img');
mosquito.src = 'imagens/mosca.png';
mosquito.className = tamanhoAleatorio() + ladoAleatorio();
mosquito.style.left = posicaoMosquitoX + 'px';
mosquito.style.top = posicaoMosquitoY + 'px';
mosquito.style.position = 'absolute';
mosquito.id = 'mosquito';
mosquito.onclick = function() {
	this.remove();
};
document.body.appendChild(mosquito);

};

function tamanhoAleatorio() {
	var classe = Math.floor(Math.random() * 3);

	switch(classe) {
		case 0:
			return 'mosquito1 ';

		case 1:
			return 'mosquito2 ';

		case 2:
			return 'mosquito3 ';

	};
};

function ladoAleatorio(){
	var classeLado = Math.floor(Math.random() * 2);

	switch(classeLado) {
		case 0:
			return 'ladoE';

		case 1:
			return 'ladoD';
	}
}




