import { separador } from "./modulos";

export {};

function saudacao(nome: string): string {
  return `Olá ${nome}`;
}

console.log(saudacao("Kelly"));
//console.log(saudacao(true));
//console.log(saudacao(10));
separador();

function saudacaoCompleta(
  nome: string,
  anoLetivo: number = 2025,
  curso?: string
) {
  if (curso) {
    return `Olá ${nome}, você está estudando ${curso}. Ano letivo: ${anoLetivo}`;
  }
  return `Olá ${nome}, sei lá o que você está fazendo ... Ano letivo: ${anoLetivo} `;
}

console.log(saudacaoCompleta("João", 2021, "TypeScript"));
console.log(saudacaoCompleta("Paulo"));
separador();
