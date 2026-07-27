const getFirstElement = <T,>(arr: T[]): T => arr[0];

const textArray = ["Docker", "Kubernetes", "AWS"];
const numericalArray = [404, 500, 200];

console.log(getFirstElement(textArray));
console.log(getFirstElement(numericalArray));