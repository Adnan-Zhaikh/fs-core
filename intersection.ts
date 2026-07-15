type Person = {
    name: string,
    email: string
};

type Permissions1 = {
    role: string,
    canDelete: boolean
};

type AdminUser = Person & Permissions1;

const activeAdmin: AdminUser = {
    name: "Adnan",
    email: "adnan@gmail.com",
    role: "Manager",
    canDelete: true
}

console.log(activeAdmin)