// exercicio.ts

/* 1) Crie uma Interface para representar um produto com as propriedades nome, preço e garantia*/
interface Produto {
    nome: string;
    preco: number;
    garantia: number
}

/* 2) Crie uma função que receba um objeto baseado na interface Produto e que mostre nome, preço e garantia. Obs.: o objeto deve ser desestruturudo com parâmetros individuais */
function exibirProduto( {nome, preco, garantia} : Produto) {
    console.log(`Produto: ${nome}, Preço: ${preco}, Garantia: ${garantia} ano`);    
}

/* 3) Use a função pelo menos 2 vezes passando produtos diferentes */

let produtoA = 
