type heroi = {
    name: string,
    vulgo: string,
};

function printaObjetos(pessoa: heroi){
    console.log(`O super herói é ${pessoa.vulgo}, cujo nome verdadeiro é ${pessoa.name}`);
};
printaObjetos({
    name: "bruce wayne",
    vulgo: "batman",
});
