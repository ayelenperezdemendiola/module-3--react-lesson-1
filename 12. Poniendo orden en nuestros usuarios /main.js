'user strict';

// Vamos a volver al listado de usuarios del ejercicio 6, porque nos ha dado la manía de tenerlos ordenados. ¿Podrías ordenarlos por orden alfabético? ¿Y por su número de PIN?
//cómo sería por orden alfabético?
const users = [
    { name: 'María', isPremium: false, pin: 2389 },
    { name: 'Lucía', isPremium: true, pin: 2384 },
    { name: 'Susana', isPremium: true, pin: 2837 },
    { name: 'Rocío', isPremium: false, pin: 5232 },
    { name: 'Inmaculada', isPremium: false, pin: 8998 },
  ];

  users.sort ((a, b) => a.pin - b.pin);

  function compare( a, b ) {
    if ( a.name < b.name ){
      return -1;
    }
    if ( a.name> b.name){
      return 1;
    }
    return 0;
  }
  // users.sort ((a, b)=> b.name -a.name); ¿Por qué esto no funciona y lo otro si?
  
  users.sort(compare);

  console.log (users);