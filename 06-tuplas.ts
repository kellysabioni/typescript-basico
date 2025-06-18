import { separador } from "./modulos";

export {};

/* Tupla
É um tipo de array usada quando precisamos armazenar um conjunto fixo de elementos de tipos diferentes. Obs.: se usar readonly, a tupla não poderá ser modificada (somente leitura)*/

const usuario: [string, number, boolean] = ["Kelly", 43, false];
console.log(usuario[0]);
console.log(usuario[1] + " anos ");
console.log(usuario[2] ? "ativo" : "inativo");

usuario[1] = 30; //atualizando um valor da tupla
console.log(usuario[1] + " anos (atualizado)");
separador();

// Criando uma tupla como tipo
type Produto = [string, number];

const produtoA: Produto = ["Camiseta", 29.99];
// const produtoB: Produto = [100, "Calça"] ; erro, pois está fora do padrão da tupla
const produtoC: Produto = ["TV", 1500];

console.log(produtoA);
console.log(produtoC);
separador();

function verificarOperacao(sucesso:boolean): [number, string] {
    if (sucesso) {
        return [200, "Operação realizada com sucesso"];
    }
    return [500, "Erro inesperado no servidor"];
}
console.log(verificarOperacao(true));
