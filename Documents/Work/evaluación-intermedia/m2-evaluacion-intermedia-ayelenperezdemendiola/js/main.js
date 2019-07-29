'use strict';

//Genero las constantes que necesito de HTML
    //input-ok
    //botón de prueba
    //espacio del contador

const input = document.querySelector ('.input-number');
console.log(input);
const counter = document.querySelector ('.main__counter');
console.log (counter);
const button = document.querySelector ('.button-prueba');
console.log (button);
const noNumberMessage = 'Por favor introduce un número válido';
const winnerMessage = '¡Enhorabuena! Haz ganado 🏅';
console.log (winnerMessage);
const lessThanTen = 'Estás muy cerca de acertar';
console.log (lessThanTen);

//Qué tiene que pasar
    // generar un número aleatorio con la ayuda de Math.random y Math.ceil, y mostrarlo por la consola(podéis usar la función de este codepen)
    // Función que genera un número aleatorio hasta un máximo dado

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
  }






function guessMyNumber (){
//3. al pulsar el botón de "prueba", acceder al contenido del input y mostrarlo en la consola
    const myRandomNumber = getRandomNumber(100);
    console.log(`Mi número aleatorio es ${myRandomNumber}`);
    console.log (input.value);
    const number = input.value;
    console.log (number);
    if (!number){
        return noNumberMessage;
    } else if (number === myRandomNumber){
        return winnerMessage;
    } else if (number-myRandomNumber<10){
        return lessThanTen;
    }

 //4. comparar el número que el usuario ha escrito en el input con el número aleatorio, y pintar el feedbackcorrespondiente en la pantalla ("demasiado alto", "demasiado bajo", "¡HAS GANADO, CAMPEONA!")


}


   
    //5. actualizar el contador de intentos cada vez que el usuario pruebe
//Mi listener es el botón de prueba
button.addEventListener ('click', guessMyNumber);
button.addEventListener ('click', getRandomNumber);