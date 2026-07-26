class BankAccount {
  private balance: number;
  public owner: string;

  constructor(owner: string, balance: number) {
    this.owner = owner;
    this.balance = balance;
  }

  deposit(amount: number): void {
    this.balance += amount;
  }

  getBalance(): number {
    return this.balance;
  }
}

const acc = new BankAccount("Adnan", 1000);
// acc.balance;
console.log(acc.getBalance());

//Shorthand constructor syntax
class BankAccount1 {
  constructor(public owner: string, private balance: number) {}

  getBalance(): number {
    return this.balance;
  }
}