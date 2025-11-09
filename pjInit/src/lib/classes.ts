enum Role {
    ADMIN = "admin",
    USER = "user",
    GUEST = "guest"
}

type DirectorParams = {
    name: string;
    lastName: string;
    age: number;
};


interface PersonInterface {
    greet(): string;    
    getName(): string;
    getLastName(): string;
    getAge(): number;
    getRole(): Role | undefined;
    setAge(age: number): void;
    setRole(role: Role): void;
}

abstract class Person implements PersonInterface {
    constructor(
        private readonly name: string, 
        private readonly lastName: string, 
        protected age: number,
        private role ?: Role
    ) {}

    public greet(): string {
        return `Ciao, mi chiamo ${this.name} ${this.lastName} e ho ${this.age} anni.`;
    }

    public getName(): string {
        return this.name;
    }
    public getAge(): number {
        return this.age;
    }
    public getLastName(): string {
        return this.lastName;
    }

    public setAge(age: number): void {
        this.age = age;
    }

    public getRole(): Role | undefined {
        return this.role;
    }

    public setRole(role: Role): void {
        this.role = role;   
    }   
}

class Director extends Person {
    private static instance: Director;

    public static getInstance(params: DirectorParams): Director {
        if (!Director.instance) {
            Director.instance = new Director(params.name, params.lastName, params.age);
        }
        return Director.instance;
    }

    private constructor(
        name: string,
        lastName: string,
        age: number
    ) {
       super(name, lastName, age);
    }
}   

class Teacher extends Person {
    constructor(
        name: string,   
        lastName: string,
        age: number,
        private readonly subject: string
    ) {
        super(name, lastName, age);
    }
    public getSubject(): string {
        return this.subject;
    }   
}

class Student extends Person {
    constructor(
        name: string,
        lastName: string,
        age: number,
        private readonly studentId: string
    ) {
        super(name, lastName, age);
    }

    public setAge(age: number): void {
        if (age < 0) {
            throw new Error("L'età non può essere negativa.");
        }
        this.age = age; 
    }

    public getStudentId(): string {
        return this.studentId;
    }
}

class Father extends Person {}
class Mother extends Person {}
class Child extends Person {}

class Utenti extends Person {
    constructor(
        name: string,
        lastName: string,
        age: number,
        private readonly id: number,
        private email: string,
        private password?: string
        
    ) {
        super(name, lastName, age);
    }   

    public getId(): number {
        return this.id;
    }

    public getEmail(): string {
        return this.email;
    }

    public setEmail(email: string): void {
        this.email = email;
    }

    public setPassword(password: string): void {
        this.password = password;
    }

    public getPassword(): string | undefined {
        return this.password;
    }   
}

export { Child, Director, Father, Mother, PersonInterface, Student, Teacher, Utenti };

