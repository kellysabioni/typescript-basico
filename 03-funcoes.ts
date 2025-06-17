import { separador } from "./modulos";

export {};

function saudacao(nome: string): string {
  return `Olá ${nome}`;
}

console.log(saudacao("Kelly"));
//console.log(saudacao(true));
//console.log(saudacao(10));
separador();

function saudacaoCompleta(nome: string, curso?: string) {
    if (curso) {
        return `Olá ${nome}, você está estudando ${curso}`;
    }
    return `Olá ${nome}, sei lá o que você está fazendo...`;
}

console.log(saudacaoCompleta("João", "TypeScript"));
console.log(saudacaoCompleta("Paulo"));
separador();
