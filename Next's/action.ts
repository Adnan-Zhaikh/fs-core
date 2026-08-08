//action.ts file for creating a server component and can be used as to collect form and send to database.

"use server";

export async function submitContactForm(formData: FormData) {
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    console.log(email, message); //I dont know yet how to show it in DB!

}

