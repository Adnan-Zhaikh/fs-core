type StandardUser = {
    name: string
}

type SystemAdmin = {
    name: string,
    clearanceLevel: number
}

function isAdmin(user: StandardUser | SystemAdmin): user is SystemAdmin {
    return (user as SystemAdmin).clearanceLevel !== undefined;
}

const currentUser: StandardUser | SystemAdmin = {
    name: "Adnan",
    clearanceLevel: 5
};

if (isAdmin(currentUser)) {
    console.log(currentUser.clearanceLevel)
}