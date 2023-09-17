/**Variáveis
 * 
 * Tipos primitivos: boolean, number, string
 * let ligado:boolean = false; 
 */
let ligado: boolean = false;
let nome: string = "karoline";
let idade: number = 30;
let altura: number = 1.65;

//tipos especiais
//null e undefined

let nulo : null = null;
let indefinido : undefined = undefined;

//tipos abrangentes: any, void
// let retorno:void = void;
function executaQuery(): void{
}

//void é feito para funções q não retornam valor

let retornoView:any = "olá mundo" 

//any retorna qualquer valor;

//objeto - sem previsibilidade

let produto:object = {
    name: "Karoline",
    cidade: "RG",
    idade: 22,
}

//objeto tipado

type ProdutoLoja = {
    nome:string;
    preco:number;
    unidades:number;
}

let meuProduto: ProdutoLoja = {
    nome: "Tenis",
    preco: 89.99,
    unidades: 5,
};

//Arrays

let dados: string[] = ["Karoline", "Daniel", "Alexandre", "Karine"];

let dados2: Array<string> = ["Karoline", "Daniel", "Alexandre", "Karine"];

let infos: (string | number)[] = ["Karoline", 22, "Daniel", 23];

//Tuplas

//Array de multi types, mas que tem um lugar exato pra cada coisa

let boleto:[string, number, number] = ["agua conta", 199.90, 233402];

let aniversario:Date = new Date("2022-08-07 08:00");

console.log(aniversario.toString());
