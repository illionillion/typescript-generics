function test<T>(arg:T): T {
    return arg
}

console.log(test<number>(1));
console.log(test(2 * 5));
console.log(test<string>("hello"));
console.log(test("world"));


type student<T> = {
    code: T
    name: string
}

const student1: student<number> = {
    code: 1,
    name: "Yamada"
}

const student2: student<string> = {
    code: "001",
    name: "Okita"
}

console.log(student1);
console.log(student2);
