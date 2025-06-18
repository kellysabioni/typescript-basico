export{}

/* Enums são uma maneira de defirnir um conjunto de constantes nomeadas. Úteis para definir: status, categorias, grupos de valores relacionados etc. */

enum DiasDaSemana{
    Domingo = "Domingo",
    Segunda = "Segunda-feira",
    Terca = "Terça-feira",
    Quarta = "Quarta-feira",
    Quinta = "Quinta-feira",
    Sexta = "Sexta-feira",
    Sabado = "Sábado",
}

const diaAtual: DiasDaSemana = DiasDaSemana.Quarta;
console.log(diaAtual); 