let order = []; //ordem do jogo
let clickedOrder = [];
let score = 0;

//0 - verde
//1 - vermelho
//2 - amarelo
//3 - azul

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');

//função q vai sortear a ordem
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4); //variavel q vai guardar o numero aleatorio
    order[order.length] = colorOrder; //atribuindo 
    clickedOrder = [];

    for(let i in order) {
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}

// acende proxima cor
let lightColor = (element, number) => {
    number = number * 500;
    setTimeout(() => {
        element.classList.add('selected');
    }, number - 250);
    setTimeout(() => {
        element.classList.remove('selected');
    });
}

// checa se os boto~es clicado são os mesmos da ordem gerada no jogo
let checkOrder = () => {
    for(let i in clickedOrder) {
        if(clickedOrder[i] != order[i]) {
            gameOver();
            break;
        }
    }
    if (clickedOrder.length == order.length) {
        alert(`Pontuação: ${score} \n Você acertou! Iniciando próximo nível!`);
        nextLevel();
    }
}

// função para o click do usuario
let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    },250);
}

// funcao q retorna a cor
let createColorElement = (color) => {
    if(color == 0) {
        return green;
    } else if (color == 1) {
        return red;
    } else if (color == 2) {
        return yellow;
    } else if (color == 4) {
        return blue;
    }
}

// funcao para proximo nivel do jogo
let nextLevel = () => {
    score ++;
    shuffleOrder();
}

// funcao para game over
let gameOver = () => {
    alert(`Pontuação: ${score} \n Você perdeu o jogo! \n Clique em Ok para iniciar um novo jogo`);
    order = [];
    clickedOrder = [];

    playGame();
}

// funçao de inicio do jogo
let playGame = () => {
    alert(`Bem vindo ao Gênesis! Iniciando novo jogo!`)
    score = 0;

    nextLevel();
}

// evento de click para as cores
green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

//inicio do jogo
playGame();