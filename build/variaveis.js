"use strict";
/**Variáveis
 *
 * Tipos primitivos: boolean, number, string
 * let ligado:boolean = false;
 */
let ligado = false;
let nome = "karoline";
let idade = 30;
let altura = 1.65;
//tipos especiais
//null e undefined
let nulo = null;
let indefinido = undefined;
//tipos abrangentes: any, void
// let retorno:void = void;
function executaQuery() {
}
//void é feito para funções q não retornam valor
let retornoView = "olá mundo";
//any retorna qualquer valor;
//objeto - sem previsibilidade
let produto = {
    name: "Karoline",
    cidade: "RG",
    idade: 22,
};
let meuProduto = {
    nome: "Tenis",
    preco: 89.99,
    unidades: 5,
};
//Arrays
let dados = ["Karoline", "Daniel", "Alexandre", "Karine"];
let dados2 = ["Karoline", "Daniel", "Alexandre", "Karine"];
let infos = ["Karoline", 22, "Daniel", 23];
//Tuplas
//Array de multi types, mas que tem um lugar exato pra cada coisa
let boleto = ["agua conta", 199.90, 233402];
let aniversario = new Date("2022-08-07 08:00");
console.log(aniversario.toString());
