"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const modulos_1 = require("./modulos");
function exibirCor(nome, cor) {
    if (cor) {
        return ` ${nome} escolheu ${cor}.`;
    }
    return ` ${nome} não escolheu nada.`;
}
console.log(exibirCor("Kelly", "Preto"));
console.log(exibirCor("Essa pessoa"));
(0, modulos_1.separador)();
function exibirCorTiago(nome, cor = "Branco") {
    return ` ${nome}, a cor é ${cor}.`;
}
console.log(exibirCorTiago("Tiago", "Cinza"));
console.log(exibirCorTiago("Essa pessoa"));
(0, modulos_1.separador)();
