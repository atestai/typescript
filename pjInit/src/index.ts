// import fs from 'node:fs';
// import {User, getUserInfo, CompareResult, compareUsers} from './lib/lib.js';
// import { Child, Director, Father, Mother, PersonInterface , Student, Teacher, Utenti } from './lib/classes.js';
// import { createInstance, createArray } from './lib/generic.js';
// import { Car } from './lib/decorator.js';


// let x = 5;
// x = 10;
// console.log(`Valore di x: ${x}`);

// try {
//     const data = fs.readFileSync('file.txt');
//     console.log('File letto con successo:', data.toString());

// } catch (error) {
//     console.error(`Errore nella lettura del file: ${error}`);
// }


// try {
//     const user: User = { id: 1, name: 'John Doe', email: 'john@example.com', age: 30 };
//     const user2: User = { id: 2, name: 'Jane Smith', email: 'jane@example.com', age: 25 };

//     console.log(getUserInfo(user));
//     const comparison = compareUsers(user, user2);
//     console.log(`Confronto utenti: ${CompareResult[comparison]}`, comparison);

// } catch (error) {
//     console.error(`Errore nell'ottenere le informazioni utente: ${error}`);
// }


// try {

//     const people: PersonInterface[] = [
//         Director.getInstance({ name: "Michael", lastName: "Scott", age: 45 }),
//         new Teacher("Alice", "Smith", 28, "Matematica"),
//         new Teacher("Bob", "Johnson", 35, "Storia"),
//         new Teacher("Charlie", "Brown", 22, "Inglese"),
//         new Teacher("David", "Wilson", 40, "Scienze"),
//         new Student("Eve", "Davis", 20, "S12345"),
//         new Student("Frank", "Miller", 19, "S67890"),
//         new Student("Grace", "Garcia", 21, "S54321"),
//         new Student("Hannah", "Martinez", 18, "S09876"),
//         new Student("Ian", "Rodriguez", 22, "S11223"),
//     ];

//     for (const person of people) {
//         person.setAge(person.getAge() + 1); // Incrementa l'età di 1
//         console.log(person.greet());
//     }

//     const family: PersonInterface[] = [];
//     const father = new Father("John", "Doe", 50);
//     const mother = new Mother("Jane", "Doe", 48);
//     const son = new Child("Jack", "Doe", 10);
//     const daughter = new Child("Jill", "Doe", 21);

//     family.push(father, mother, son, daughter);

//     for (const member of family.filter(person => person instanceof Child)) {
//         console.log(member.greet());
//     }   

//     console.log('Famiglia creata con successo:', family.find(member => member instanceof Father)?.getName(), 'e', family.find(member => member instanceof Mother)?.getName());
//     console.log('Figli:', family.filter(member => member instanceof Child && member.getAge() > 18).map(member => member.getName() + ' ' + member.getLastName()));
//     console.log('Minor:', family.filter(member => member.getAge() < 18).map(member => member.getName() + ' ' + member.getLastName()));
//     console.log('Adult:', family.filter(member => !(member instanceof Child)).map(member => member.getName() + ' ' + member.getLastName()));

// } catch (error) {   
//     console.error(`Errore nella creazione della persona: ${error}`);
// }



// try {
//     //const user = createInstance(Utenti, 1, 'John Doe', 'john@example.com', 30);

//     const userArray = createArray<PersonInterface>(
//         createInstance(Mother, 'Jane',  'Smith',  25),
//         createInstance(Utenti, 'Alice', 'Johnson',  28),
//         createInstance(Teacher, 'Bob', 'Brown', 35, 'History'),
//         createInstance(Student, 'Charlie', 'Davis',  22, 'S12345'),
//         new Child('Daisy', 'Miller',  10),
//         new Father('Edward', 'Wilson',  40)

//     );

//     for (const u of userArray) {
//         console.log(`Utente nell'array: ${u.greet()}`);
//     }

//     //console.log(`Utente creato: ID=${user.getId()}, Nome=${user.getName()}, Email=${user.getEmail()}, Età=${user.getAge()}`);
//     //console.log(`Password: ${user.getPassword()}`);

// } catch (error) {
//     console.error(`Errore nella creazione dell'utente: ${error}`);
// }


//const car = new Car('Honda', 'Civic');

function Logger(str: string) {
    return function(target: any) {
        console.log(str);
        console.log(target);
    }
}

function logMethod(str?: string) {
    return function(target: any) {
        console.log(`Method ${target.name} has been created.`, str || '');
        //console.log(target);
    }
}

//@logClass
@Logger("--- Logging class:")
class Car{
    constructor(public brand: string, public model: string){
    }

    @logMethod("Displaying car information")
    public displayInfo(): void {
        console.log(`Car Brand: ${this.brand}, Model: ${this.model}`);
    }
}

