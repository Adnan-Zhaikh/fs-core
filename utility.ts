interface AppConfiig {
    theme: string;
    dbPort: number;
}

const globalConfig: Readonly<AppConfiig> = { theme: "dark", dbPort:5432};

const partialUpdate: Partial<AppConfiig> = { theme:  "emerald"};

console.log(globalConfig);
console.log(partialUpdate);