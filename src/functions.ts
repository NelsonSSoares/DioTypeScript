function addNumber(x: number,y:number):number{
    return x+y;
}

let soma: number = addNumber(4,6);

console.log(soma);

function addToHello(name: string): string{
    return `hello ${name}`;
}
console.log(addToHello('Nelson'));

//funcao multitipos

function callToPhone(phone: number | string)/*number | sting or any*/{
    return phone;
}

console.log(callToPhone(123+'deoliveira'+4));

/*FUNCAO ASSINCRONA*/

async function getDataBase(id: number): Promise<string | number> {
    return await "Juarez";
}