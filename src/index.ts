type hero={
    name: string;
    vulgo: string;
}

function printObject(pessoa: hero): void{
    console.log(pessoa);
    
}

printObject({
    name: "Bruce wayne",
    vulgo:"BATMAN"
});

/* COMENTARIO QUE NAO DEVE SER EXIBIDO*/