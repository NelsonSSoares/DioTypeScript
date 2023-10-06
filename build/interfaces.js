"use strict";
const bot = {
    id: 1,
    name: "Terminator"
};
;
const bo1 = {
    id: 1,
    name: "Megaman",
    sayHello: function () {
        console.log("Megaman");
        return "megaman";
    }
};
console.log(bot);
console.log(bo1);
class Pessoa {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    sayHello() {
        return "hello";
    }
}
const p = new Pessoa(1, "Nelson");
console.log(p.sayHello());
