import { separador } from "./modulos";

export {};

/* Union Types */

// União de tipos literais
let direcao: "esquerda" | "direita"; // valores possíveis
direcao = "esquerda";
console.log(direcao);

direcao = "direita";
console.log(direcao);

separador();

// Criando um novo tipo combinando outros tipos existentes
type NumeroOuTexto = number | string;
let exemploA: NumeroOuTexto = 2112;
let exemploB: NumeroOuTexto = "Senac";
console.log("Exemplo A: " + exemploA);
console.log("Exemplo B: " + exemploB);

separador();

type Status = "ativo" | "inativo" | "pendente";
let situacaoAluno1: Status = "ativo";
let situacaoAluno2: Status = "inativo";
let situacaoAluno3: Status = "pendente";

console.log(situacaoAluno1);
console.log(situacaoAluno2);
console.log(situacaoAluno3);

separador();

type DiasDaSemana =
  | "Domingo"
  | "Segunda-fera"
  | "Terça-feira"
  | "Quarta-feira"
  | "Quinta-feira"
  | "Sexta-feira"
  | "Sábado";

const diaAtual: DiasDaSemana = "Quinta-feira";
console.log(diaAtual);
separador();

type Pessoa = {nome: string, idade: number};
type Funcionario = {salario: number};

const programadora: Pessoa & Funcionario = {
  nome: "Kelly",
  idade:43,
  salario: 5000
}

console.log(programadora);
separador();

type Colaborador = Pessoa & Funcionario;
const outroProgramdor: Colaborador = {
  nome: "Fulano",
  idade:55,
  salario: 60000
}
console.log(outroProgramdor);
