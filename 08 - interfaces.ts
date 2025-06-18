export {};

/* Interfaces são usadas para definir a forma de um objeto, especializando os tipos de suas propriedades e métodos. São úteis para garantir que os objetos sigam uma estrutura específica */

interface Usuario {
  nome: string;
  idade: number;
  ativo: boolean;
  email?: string;
}

const usuarioA: Usuario = {
    nome: "Kelly",
    idade: 43,
    ativo: false,
    
}

const usuarioB: Usuario = {
    nome: "Kelly Sabioni",
    idade: 43,
    ativo: true,
    email: "kelly@gmail.com"
}

console.log(usuarioA);
console.log(usuarioB);
