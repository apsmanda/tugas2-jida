import { NextResponse } from "next/server";
import { propertyHomes } from "../propertyhomes"; 

export async function GET() {
    return NextResponse.json(propertyHomes);
}

export async function POST(request: Request) {
    const productData = await request.json();

    const newProduct = {
        id: Date.now(), 
        ...productData
    };

    propertyHomes.push(newProduct);

    return NextResponse.json(newProduct, { status: 201 });
}