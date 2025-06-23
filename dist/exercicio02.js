"use strict";
function mostrarProduto(produto) {
    console.log("Produto:" + produto.nome);
    console.log("Produto:" + produto.preco);
    console.log("Produto:" + produto.garantia);
}
const Produto1 = {
    nome: "TV",
    preco: 4500,
    garantia: 1
};
const Produto2 = {
    nome: "Geladeira",
    preco: 3750,
    garantia: 2
};
mostrarProduto(Produto1);
console.log("---------------");
mostrarProduto(Produto2);
