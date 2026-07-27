// const input = document.getElementById("username") as HTMLInputElement;
// input.value = "Adnan";

// const inputd = <HTMLInputElement>document.getElementById("username");


const el = document.getElementById("myDiv") as HTMLDivElement;

function processInput(data: unknown): string {
    if (typeof data === "string") {
        return data.toUpperCase();
    } else {
        return "Invalid Input";
    }
}