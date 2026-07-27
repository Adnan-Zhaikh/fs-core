abstract class Shape {
    abstract area(): number;

    describe(): string {
        return `This shape has area ${this.area()}`;
    }
}

class Circle extends Shape {
  constructor(private radius: number) {
    super();
  }
  area(): number {
    return Math.PI * this.radius ** 2;
  }
}

// const s = new Shape(); // ❌ Error — can't instantiate abstract class
const c = new Circle(5); // ✅