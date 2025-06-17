"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const modulos_1 = require("./modulos");
function saudacao(nome) {
    return `Olá ${nome}`;
}
console.log(saudacao("Kelly"));
//console.log(saudacao(true));
//console.log(saudacao(10));
(0, modulos_1.separador)();
function saudacaoCompleta(nome, curso) {
    if (curso) {
        return `Olá ${nome}, você está estudando ${curso}`;
    }
    return `Olá ${nome}, sei lá o que você está fazendo...`;
}
console.log(saudacaoCompleta("João", "TypeScript"));
console.log(saudacaoCompleta("Paulo"));
(0, modulos_1.separador)();
