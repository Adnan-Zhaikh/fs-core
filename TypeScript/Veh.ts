//Class

class Vehicle {
    private speed: number = 0;


    accelerate(amount: number): void {
        this.speed += amount;
    }
}

const v = new Vehicle();
v.accelerate(20);

//Implements
interface Playable {
    play(): string;
}

class Song implements Playable {
    play(): string {
        return "La La La..."
    }
}

//Abstract
abstract class Employee {
    abstract calculateSalary(): number;

}

class Manager extends Employee {
    calculateSalary(): number {
        return 51220;
    }
}

const c = new Manager();

console.log(c.calculateSalary)