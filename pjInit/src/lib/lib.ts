type User = {
    id: number;
    name: string;
    email: string;
    age: number;
};

enum CompareResult {
    LessThan = -1,
    Equal = 0,
    GreaterThan = 1
}

const InternalEnum = {
    First : "FirstValue",
    Second : "SecondValue",
    Third : "ThirdValue"
} as const;

export { CompareFunc, User, CompareResult, InternalEnum };

type CompareFunc<T> = (a: T, b: T) => CompareResult;

export function getUserInfo(user: User): string {
    return `User Info: ID=${user.id}, Name=${user.name}, Email=${user.email}, Age=${user.age}`;
}

export const compareUsers: CompareFunc<User> = (a, b) => {
  if (a.id < b.id) return CompareResult.LessThan;
  if (a.id > b.id) return CompareResult.GreaterThan;
  return CompareResult.Equal;
};

