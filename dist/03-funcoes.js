"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const modulos_1 = require("./modulos");
function saudacao(nome) {
    return `Olá ${nome}`;
}
console.log(saudacao("Kelly"));
(0, modulos_1.separador)();
function saudacaoCompleta(nome, anoLetivo = 2025, curso) {
    if (curso) {
        return `Olá ${nome}, você está estudando ${curso}. Ano letivo: ${anoLetivo}`;
    }
    return `Olá ${nome}, sei lá o que você está fazendo ... Ano letivo: ${anoLetivo} `;
}
console.log(saudacaoCompleta("João", 2021, "TypeScript"));
console.log(saudacaoCompleta("Paulo"));
(0, modulos_1.separador)();
