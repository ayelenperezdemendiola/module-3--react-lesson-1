'use strict';

const users = [
  { name: 'María', isPremium: false },
  { name: 'Lucía', isPremium: true },
  { name: 'Susana', isPremium: true },
  { name: 'Rocío', isPremium: false },
  { name: 'Inmaculada', isPremium: false },
];

const selectedHi = user => {
    if(user.isPremium === false){
        const newOrdinariHi = 'Bienvenida '  + user.name;
        return newOrdinariHi;
    } else {
        const newPremiumHi = 'Bienvenida '  + user.name + '. Gracias por confiar en nosotros';
        return newPremiumHi;
    }};

const diferentsHi = users.map(selectedHi);

console.log (diferentsHi);

