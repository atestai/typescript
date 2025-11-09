export function createArray<T>(...elements: T[]): Array<T> {
    return elements;
}

const numArray = createArray<number>(10, 20, 30);
const strArray = createArray<string>('a', 'b', 'c');


numArray.push(40); // Valido
strArray.push('d'); // Valido
// numArray.push('e'); // Errore di tipo
// strArray.push(50); // Errore di tipo


export function createSet<T>(...elements: T[]): Set<T> {
    return new Set(elements);
}

type StringList = Array<string>;

export function createStringList(...elements: string[]): StringList {
    return elements;
}

type Constructor<T> = new (...args: any[]) => T;

export function createInstance<T>(ctor: Constructor<T>, ...args: any[]): T {
    return new ctor(...args);
}