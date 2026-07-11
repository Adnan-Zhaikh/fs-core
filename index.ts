const nickname = "addy";
const message: string = `Hello ${nickname}`;
console.log(message);

//Variables in Typescript
let fname: string = "John"; //string
let age: number = 25; //integer
let hobbies: string[] = ["Basketball", "Hockey"]; //array

let stringOrNumber = "this is a string!";
console.log(typeof stringOrNumber);  // string


function calculateTotal(price: number, quantity: number) {
    return price * quantity;
}

let validTotal = calculateTotal(250,6);
console.log("Valid total is: ", validTotal);

let brokenTotal = calculateTotal(2840,2);
console.log("Valid total is: ", brokenTotal);