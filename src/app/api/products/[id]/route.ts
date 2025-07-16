import { NextResponse } from "next/server";
import { propertyHomes } from "../../propertyhomes";

export async function PUT(request: Request, { params }: { params: { id: string } }) {
    const id = parseInt(params.id);
    const updatedData = await request.json();

    const productIndex = propertyHomes.findIndex(p => p.id === id);

    if (productIndex === -1) {
        return NextResponse.json({ message: "Produk tidak ditemukan" }, { status: 404 });
    }

    propertyHomes[productIndex] = { ...propertyHomes[productIndex], ...updatedData };

    return NextResponse.json(propertyHomes[productIndex]);
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
    const id = parseInt(params.id);
    const productIndex = propertyHomes.findIndex(p => p.id === id);

    if (productIndex === -1) {
        return NextResponse.json({ message: "Produk tidak ditemukan" }, { status: 404 });
    }

    propertyHomes.splice(productIndex, 1);

    return NextResponse.json({ message: "Produk berhasil dihapus" });
}
