//INTERFACES X TYPE
//TYPE
type robot={
    id:number;
    name: string;
};

const bot: robot={
    id: 1,
    name: "Terminator"
};

//INTERFACE

interface robot2{
    id: number;
    name: string;

    sayHello():string;

};

const bo1:robot2={
    id: 1,
    name: "Megaman",
    sayHello: function (): string {
       console.log("Megaman");
       return "megaman";
    }
};

// ambos aceitam multtipos e tambem podem ser readonly
//readonlys nao podem ter valores atribuidos. ex: pessoa.nome = 'nelson', não seria permitido

//INTERFACES SÃO SOMENTE LEITURA
console.log(bot);
console.log(bo1);

class Pessoa implements robot2{
    constructor(id: number, name: string){
        this.id = id;
        this.name = name
    }
    sayHello(): string {
        return "hello";
    }

    id: number;
    name: string;

}

const p = new Pessoa(1, "Nelson");
console.log(p.sayHello());
