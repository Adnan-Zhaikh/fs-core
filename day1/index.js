"use strict";
const nickname = "addy";
const message = `Hello ${nickname}`;
console.log(message);
function calculateTotal(price, quantity) {
    return price * quantity;
}
let validTotal = calculateTotal(250, 6);
console.log("Valid total is: ", validTotal);
let brokenTotal = calculateTotal(2840, 2);
console.log("Valid total is: ", brokenTotal);
