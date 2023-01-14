/* String literals */

let hello = 'hello';
let world = 'world';
let epicPhrase = hello + ' ' + world + '!'; //Metodo normal
console.log(epicPhrase);

// Template literals
let epicPhrase2 = `${hello} ${world}!`;
console.log(epicPhrase2);

// Multi-line strings

let lorem = 'Esto es un string \n' + 'Esto es otra linea';
console.log(lorem);
let lorem2 = `Esta es una prase epica
la continuacion de la frase epica`;
console.log(lorem2);