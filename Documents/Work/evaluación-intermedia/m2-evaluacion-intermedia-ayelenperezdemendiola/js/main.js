'use strict';

const input = document.querySelector ('.input-number');
const button = document.querySelector ('.button-prueba');
const winnerMessage = '¡Enhorabuena! Haz ganado campeona 🏅';
const higherNumber = 'Demasiado alto';
const lessNumberMessage = 'Demasiado bajo';
const counterShow = document.querySelector ('.main__counter');
let counter = 0;
function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
  };

function guessMyNumber (){
    const myRandomNumber = getRandomNumber(100);
    console.log(`Mi número aleatorio es ${myRandomNumber}`);
    const number = parseInt(input.value);
    console.log (number);
    counter = counter + 1;
    counterShow.innerHTML = counter;
    if (number === myRandomNumber){
        console.log(winnerMessage);
        return winnerMessage;
    } else if (number > myRandomNumber){
        console.log (higherNumber);
        return higherNumber;
    } else {
        console.log (lessNumberMessage);
        return lessNumberMessage;
    }
}
   
button.addEventListener ('click', guessMyNumber);
button.addEventListener ('click', getRandomNumber);
console.log (guessMyNumber());
console.log (getRandomNumber());


