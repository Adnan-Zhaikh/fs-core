import { NextResponse, NextRequest } from "next/server";

export async function GET() {

    const product = [{ id: 1, name: "Sample"}];
    return NextResponse.json(product); 

}


export async function POST(request: NextRequest) {
    const body = await request.json();
    const { name, price } = body;

    if(!body.price){
        return NextResponse.json({ error: "Price Missing"}, { status: 400});

        }
        return NextResponse.json({ message: "Created"}, { status: 201});
    }