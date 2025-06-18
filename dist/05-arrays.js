"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const modulos_1 = require("./modulos");
const bandas = ["Metalica", "Slayer", "Iron Maiden"];
const artistas = ["Jon Oliva", "Sting", "David Gilmour"];
console.log(artistas);
artistas.push("Neil Gaiman");
console.log(artistas);
(0, modulos_1.separador)();
const pessoas = ["TEnis", 39, "Marta", 25];
console.log(pessoas);
(0, modulos_1.separador)();
const linguagens = [
    ["JS", "TS"],
    ["React", "React Native"],
];
console.log(linguagens[1]);
(0, modulos_1.separador)();
const numeros = [100, 120, 300, 1440, 50];
const total = numeros.reduce((acumulador, numero) => {
    return acumulador + numero;
}, 0);
console.log(total);
