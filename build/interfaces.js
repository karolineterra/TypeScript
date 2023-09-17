"use strict";
//Interfaces (type x interface)
const bot = {
    id: 1,
    name: "megaman",
};
const bot2 = {
    id: 1,
    name: "megaman",
    sayHello: function () {
        throw new Error("Function not implemented.");
    }
};
console.log(bot);
console.log(bot2);
class Pessoa {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    sayHello() {
        return `hello I am ${this.name}`;
    }
}
const p = new Pessoa(1, "Karoline");
console.log(p.sayHello());
