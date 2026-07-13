class BankAccount {
    private _balance: number = 0;
    get balance(): number { return this._balance; }
    
    set deposit(amount: number) {
        if (amount > 0) this._balance += amount;
    }
}

const account = new BankAccount();
account.deposit = 500;

console.log(account.balance);