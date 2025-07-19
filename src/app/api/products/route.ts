import { NextResponse } from "next/server";
import prisma from '@/lib/prisma';
import { propertyHomes } from "../propertyhomes"; 

export async function GET() {
    try {
        const products = await prisma.produkPakaian.findMany({
            orderBy: {
                createdAt: 'desc',
            },
        });
        return NextResponse.json(products);
    } catch (error) {
        // DEBUGGING
        console.error("--- TERJADI ERROR DI API ---");
        console.error("Pesan Error Lengkap:", error); 
        
        return NextResponse.json(
            { 
                message: 'Gagal mengambil data produk. Cek terminal server untuk detail.',
                errorDetails: String(error) // Mengirim sedikit detail ke frontend
            }, 
            { status: 500 }
        );
    }
}

export async function POST(request: Request) {
    try {
        const data = await request.json();
        const newProduct = await prisma.produkPakaian.create({
            data: {
                ...data,
                // Pastikan tipe data sesuai, contoh:
                price: Number(data.price),
                rating: parseFloat(data.rating),
                reviews: Number(data.reviews),
            },
        });
        return NextResponse.json(newProduct, { status: 201 });
    } catch (error) {
        console.error("--- ERROR SAAT MEMBUAT PRODUK ---");
        console.error("Pesan Error Lengkap:", error);
        return NextResponse.json({ message: 'Gagal membuat produk', errorDetails: String(error) }, { status: 500 });
    }
}

export async function PUT(request: Request, { params }: { params: { id: string } }) {
    try {
        const id = parseInt(params.id, 10);
        const data = await request.json();
        const updatedProduct = await prisma.produkPakaian.update({
            where: { id },
            data: {
                ...data,
                price: Number(data.price),
                rating: parseFloat(data.rating),
                reviews: Number(data.reviews),
            },
        });
        return NextResponse.json(updatedProduct);
    } catch (error) {
        console.error(`--- ERROR SAAT MEMPERBARUI PRODUK ${params.id} ---`);
        console.error("Pesan Error Lengkap:", error);
        return NextResponse.json({ message: 'Gagal memperbarui produk', errorDetails: String(error) }, { status: 500 });
    }
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
    try {
        const id = parseInt(params.id, 10);
        await prisma.produkPakaian.delete({
            where: { id },
        });
        return NextResponse.json({ message: 'Produk berhasil dihapus' }, { status: 200 });
    } catch (error) {
        console.error(`--- ERROR SAAT MENGHAPUS PRODUK ${params.id} ---`);
        console.error("Pesan Error Lengkap:", error);
        return NextResponse.json({ message: 'Gagal menghapus produk', errorDetails: String(error) }, { status: 500 });
    }
}