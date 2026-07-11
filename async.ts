const delayMessage = (): Promise<string> => {
    return new Promise(resolve => 
        setTimeout(() => 
            resolve("Data Payload Downloaded!"), 1500));
}

const runEngine = async (): Promise<void> => {
    console.log("Initiating request...");
    const response = await delayMessage();
    console.log(response);

}


runEngine();