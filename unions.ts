function parseFormat(input: string | number): string {
    if( typeof input === "string"){
        return input.toUpperCase();
    } else {
        return (input * 100).toString();
    }
}

const r: string = "adnan";
const a: number = 4;

console.log(parseFormat(r))
console.log(parseFormat(a))