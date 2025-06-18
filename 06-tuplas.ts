export {};

/* Tupla
É um tipo de array usada quando precisamos armazenar um conjunto fixo de elementos de tipos diferentes. */

const usuario: [string, number, boolean] = ["Kelly", 43, false];
console.log(usuario[0]);
console.log(usuario[1] + " anos ");
console.log(usuario[2] ? "ativo" : "inativo");
