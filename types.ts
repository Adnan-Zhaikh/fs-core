type UserAccount = {
    userId: string;
    email: string;
};

type SecurityTokens = {
    jwtToken: string;
    accessLevel: string;
};

type AuthenticatedRequest = UserAccount & SecurityTokens;

const incomingPayload: AuthenticatedRequest = {
    userId: "UE1",email: "abse@example.com",
    jwtToken: "001t79",
    accessLevel: "Moderate"
}
const processRequest = (req: AuthenticatedRequest): void => console.log(`Access granted to user ${req.userId} with clear level: ${req.accessLevel}`);

processRequest(incomingPayload);