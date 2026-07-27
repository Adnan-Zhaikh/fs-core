abstract class Transaction {
    public amount: number;

    constructor(amount: number) {
        this.amount = amount;
    }
    
    abstract process(): void;
}

class CreditCardPayment extends Transaction {
    process(): void {
        console.log("The amount was processed Via Credit card", this.amount)
    }
}

const payment = new CreditCardPayment(2500);
payment.process();

