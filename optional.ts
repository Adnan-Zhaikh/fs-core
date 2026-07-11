interface UserProfile {
    username: string;
    email: string;
    phoneNumber?: number; //optional
    isAdmin?: boolean; //optional
}

const userA: UserProfile = {
    username: "addy",
    email: "addy@gmail.com",
    phoneNumber: 7219609313,
    isAdmin: true 
};

const userB: UserProfile = {
    username: "baddy",
    email: "bbdy@gmail.com"
};

function statusCheck(user: UserProfile): void {
    console.log(`--- Showing the Details of ${user.username} ---`);

    if (user.isAdmin){
        console.log(`User: ${user.username} is Admin!`);
    } else {
        console.log(`User: ${user.username} is not admin!`);
    }

}

statusCheck(userA);
statusCheck(userB);