
import * as fs from 'node:fs';
import { LogLevel, type User, type CompareFunc } from './TypeAndEnum.js';

function main(logLevel: LogLevel) : void {
    
    switch (logLevel) {
        case LogLevel.INFO:
            console.log('Informational message');
            break;
        case LogLevel.WARN:
            console.warn('Warning message');
            break;
        case LogLevel.ERROR:
            console.error('Error message');
            break;
    }
};

try {
    main(LogLevel.INFO);

    const users: User[] = [
        { id: 1, name: 'Alice', email: 'alice@example.com', isActive: true },
        { id: 2, name: 'Bob', email: 'bob@example.com' },
        { id: 3, name: 'Charlie', email: 'charlie@example.com', isActive: false },
        { id: 4, name: 'Bob', email: 'diana@example.com', isActive: true }

    ];

    let compareUsers: CompareFunc<User> = (a: User, b: User): boolean => a.name === b.name;

    console.log(compareUsers(users[0], users[1]));
    console.log(compareUsers(users[1], users[3]));


    const activeUsers = users.filter(user => user.isActive);
    console.log('Active users:', activeUsers);

} catch (error : Error | unknown) {
    console.error('Errore nell\'esecuzione del programma:', error);
}

fs.readFile('output.txt', 'utf-8', (err: Error | null, data: string | null) => {
    if (err) {
        console.error('Errore nella lettura del file:', err);
        return;
    }

    console.log('Contenuto del file:', data);
});



// let message: string = "Hello, TypeScript!";
// console.log(message);

// function sommaPlus(a: number,  b: number | string): number | null {
//     if (typeof b === 'string') {
//         const parsedB = Number.parseFloat(b);
        
//         if (Number.isNaN(parsedB)) {
//             console.error("Il secondo argomento non è un numero valido.");
//             return null;
//         }
//         b = parsedB;
//     }

//     return a + b;
// }

// function somma(a : number, b: number): number {
//     return a + b;       
// }

// function dividi(a: number, b: number): number | null {
//     if (b === 0) {
//         console.error("Errore: Divisione per zero.");
//         return null;
//     }
//     return a / b;
// }   

// function sottrai(a: number, b: number): number {
//     return a - b;
// }


// function moltiplica(a: number, b: number): number {
//     return a * b;
// }


// function calcola( params : {a : number, b : number, operazione : 'somma' | 'sottrai' | 'moltiplica' | 'dividi'} ) : number | null {
//     switch(params.operazione) {
//         case 'somma':
//             return somma(params.a, params.b);
//         case 'sottrai':
//             return sottrai(params.a, params.b);
//         case 'moltiplica':
//             return moltiplica(params.a, params.b);
//         case 'dividi':
//             return dividi(params.a, params.b);
//         default:
//             console.error("Operazione non valida.");
//             return null;
//     }
// }


// let r : string = "c";
// r = "d";

// let c : number = 5;
// c = 10;

// let b : boolean = true;
// b = false;

// const map = new Map<string, number>();
// map.set("uno", 1);
// map.set("due", 2);
// map.set("tre", 3);

// for (const [key, value] of map) {
//     console.log(`Chiave: ${key}, Valore: ${value}`);
// }   

// for (const key of map.keys()) {
//     console.log(`Chiave: ${key}`);
//     console.log(`Valore: ${map.get(key)}`);
// }


// const array: number[] = [1, 2, 3, 4, 5];
// array.push(6, 7);
// console.log(array);

// const array2: Array<string> = ['a', 'b', 'c'];
// array2.push('d', 'e');
// console.log(array2);

// const persona : {
//     nome: string,
//     cognome: string,
//     eta: number
// } = {
//     nome: "Mario",
//     cognome: "Rossi",
//     eta: 30
// }

// let personaSesso: { nome: string; cognome: string; eta: number; sesso?: string } = persona;

// console.log(`Nome: ${persona.nome}, Cognome: ${persona.cognome}, Età: ${persona.eta}`);
// persona.eta = 31;

// personaSesso.sesso = "M";


// let cal : any = 10;
// cal = "Ciao";
// cal = true;
// cal = { nome: "Luca" };




// const result = sommaPlus(5, '10');
// console.log(result);

// const invalidResult = sommaPlus(5, 'abc');
// console.log(invalidResult);

// let n = 10;
// //let n = 10;
// n += 5;

// n = 25;

// function incrementa(x: number): number {
//     return x + 1;
// }

// console.log(incrementa(n));
