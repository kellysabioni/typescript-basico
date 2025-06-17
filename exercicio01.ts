import { separador } from "./modulos";

/*
1) Crie uma função chamada "exibirCor" que aceite:
- nome da pessoa (obrigatório)
- cor preferida da pessoa (opcional)

Atenção: o parâmetro cor deve ser do tipo Cor e aceitar somente 5 cores.

2) Chame a função pelo menos 2 vezes:
- Na primeira, passe o nome e uma cor (das possíveis)
- Na segunda, passe somente o nome 
*/
export {};

type Cor = "Amarelo" | "Branco" | "Cinza" | "Preto" | "Vermelho";

// Versão 01 - minha
function exibirCor(nome: string, cor?: Cor) {
  if (cor) {
    return ` ${nome} escolheu ${cor}.`;
  }
  return ` ${nome} não escolheu nada.`;
}

console.log(exibirCor("Kelly", "Preto"));
console.log(exibirCor("Essa pessoa"));
separador();

// Versão 02 - Tiago
function exibirCorTiago(nome: string, cor: Cor = "Branco") {
  return ` ${nome}, a cor é ${cor}.`;
}

console.log(exibirCorTiago("Tiago", "Cinza"));
console.log(exibirCorTiago("Essa pessoa"));
separador();
