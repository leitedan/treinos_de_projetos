let order = [];
let clickedOrder = [];
let score = 0;

// 0 = Verde
// 1 = vermelho
// 2 = amarelo
// 3 = azul

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');

//ordens aleatorias de cores
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for(let i in order) {
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}

//proxima cor
let lightColor = (element, number) => {
    number = number * 500;
    setTimeout(() => {
        element.classList.add('selected');
        
    }, number - 250);
    setTimeout(() => {
        element.classList.remove('selected');
    });
}

//checa se os botoes sao os certos
let checkOrder = () => {
    for (let i in clickedOrder) {
        if(clickedOrder[i] != order[i]){
            gameOver();
            break;
        }
    }
    if(clickedOrder.length == order.length) {
        alert(`Pontuacao: ${score}\nVoce acertou! Proximo nivel!`);
        nextLevel();
    }
}

//Clicar
let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    }, 250);    
}

//Color Element - Retornar a cor

let createColorElement = (color) => {
    if(color == 0){
        return green;        
    } else if (color == 1) {
        return red;
    } else if (color == 2) {
        return yellow;
    } else if (color == 3) {
        return blue;
    }
}

//Proximo nivel
let nextLevel = () => {
    score++;
    shuffleOrder();
}

//Perdeu o jogo
let gameOver = () => {
    alert(`pontuacao: ${score}!\nVoce perdeu o jogo\nrecomecar`);
    order = [];
    clickedOrder = [];

    playGame();
}

//inicio do jogo
let playGame = () => {
    alert('Bem vindo ao jogo!');
    score = 0;

    nextLevel();

}

//eventos de clique
green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);


//rodar pela primeira vez
playGame();
