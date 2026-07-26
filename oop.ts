//Inheritance
class Animal {
  constructor(public name: string) {}

  speak(): string {
    return `${this.name} makes a sound`;
  }
}

class Dog extends Animal {
  speak(): string {
    return `${this.name} barks`;
  }
}

const d = new Dog("Rex");
console.log(d.speak()); // "Rex barks"

class Cat extends Animal {
  constructor(name: string, public breed: string) {
    super(name);
  }
}

//Implements method

interface Speaker {
  speak(): string;
}

class Cow implements Speaker {
  speak(): string {
    return "Moooow!";
  }
}