class Person {
    name: string;
    age: number;

    constructor(name: string, age:number) {
        this.name = name;
        this.age = age;
    }

    greet(): string {
        return `Hi, I'm ${this.name}`;
    }
}

const p = new Person("Adnan", 20);
console.log(p.greet());