export enum LogLevel {
    INFO = 'info',
    WARN = 'warn',
    ERROR = 'error',
    FATAL = 400
}

export enum UserRole {
    ADMIN = 'admin',
    USER = 'user',
    GUEST = 'guest'
}

export type User = {
    id: number;
    name: string;
    email: string;
    isActive?: boolean;
}

export type Product = {
    id: number;
    name: string;
    price: number;
    inStock: boolean;
}


export type CompareFunc<T> = (a: T, b: T) => boolean;