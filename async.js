"use strict";
const delayMessage = () => {
    return new Promise(resolve => setTimeout(() => resolve("Data Payload Downloaded!"), 1500));
};
const runEngine = async () => {
    console.log("Initiating request...");
};
const response = await delayMessage();
runEngine();
