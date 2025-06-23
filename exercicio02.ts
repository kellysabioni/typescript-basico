// exercicio.ts

/* 1) Crie uma Interface para representar um produto com as propriedades nome, preço e garantia*/
interface Produto {
  nome: string;
  preco: number;
  garantia: number
}

/* 2) Crie uma função que receba um objeto baseado na interface Produto e que mostre nome, preço e garantia. Obs.: o objeto deve ser desestruturudo com parâmetros individuais */
/* function mostrarProduto( {nome, preco, garantia} : Produto) {
  return  console.log(`Produto: ${nome}, Preço: ${preco}, Garantia: ${garantia} ano`);    
} */

function mostrarProduto(produto: Produto): void {
  console.log("Produto:" + produto.nome);
  console.log("Produto:" + produto.preco);
  console.log("Produto:" + produto.garantia);
}
/* 3) Use a função pelo menos 2 vezes passando produtos diferentes */

const Produto1: Produto = {
  nome: "TV",
  preco: 4500,
  garantia: 1
};

const Produto2: Produto = {
  nome: "Geladeira",
  preco: 3750,
  garantia: 2
};

mostrarProduto(Produto1);
console.log("---------------");
mostrarProduto(Produto2);
