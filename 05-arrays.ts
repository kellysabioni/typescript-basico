import { separador } from "./modulos";
export {};
 
// sintaxe 1
const bandas: Array<string> = ["Metalica", "Slayer", "Iron Maiden"];
 
// sintaxe 2
const artistas: string[] = ["Jon Oliva", "Sting", "David Gilmour"];
 
// artistas.push(10); erro
console.log(artistas);
 
artistas.push("Neil Gaiman");
console.log(artistas);
separador();
 
const pessoas: (string | number)[] = ["TEnis", 39, "Marta", 25];
console.log(pessoas);
separador();
 
// matriz tipada
const linguagens: string[][] = [
  ["JS", "TS"],
  ["React", "React Native"],
];
console.log(linguagens[1]);
separador();
 
// Mini-exercicio
// 1 - Crie um array de números e calcule a soma de todos os elementos
const numeros: number[] = [100, 120, 300, 1440, 50];

// 2 - Calcule a soma de todos os elementos e guarde numa variável
const total = numeros.reduce((acumulador, numero) => {
    return acumulador + numero
}, 0)
// 3 - Mostre o resultado da soma 
console.log(total);





