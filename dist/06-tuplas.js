"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const modulos_1 = require("./modulos");
const usuario = ["Kelly", 43, false];
console.log(usuario[0]);
console.log(usuario[1] + " anos ");
console.log(usuario[2] ? "ativo" : "inativo");
usuario[1] = 30;
console.log(usuario[1] + " anos (atualizado)");
(0, modulos_1.separador)();
const produtoA = ["Camiseta", 29.99];
const produtoC = ["TV", 1500];
console.log(produtoA);
console.log(produtoC);
(0, modulos_1.separador)();
function verificarOperacao(sucesso) {
    if (sucesso) {
        return [200, "Operação realizada com sucesso"];
    }
    return [500, "Erro inesperado no servidor"];
}
let resultadoDaOperacao = verificarOperacao(false);
console.log(resultadoDaOperacao);
(0, modulos_1.separador)();
function verificarResultado(sucesso) {
    return sucesso
        ? [200, "Operação realizada com sucesso"]
        : [500, "Erro inesperado no servidor"];
}
let [, Resultado] = verificarResultado(false);
console.log(Resultado);
(0, modulos_1.separador)();
