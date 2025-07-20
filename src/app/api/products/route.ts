import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

interface RouteContext {
  params: {
    id: string;
  };
}

// GET (by ID): Mengambil satu produk spesifik
export async function GET(request: Request, context: RouteContext) {
    // Ambil ID dari 'context.params'
    const id = parseInt(context.params.id, 10);
    try {
        if (isNaN(id)) {
            return NextResponse.json({ message: 'ID Produk tidak valid' }, { status: 400 });
        }

        const product = await prisma.produkPakaian.findUnique({
            where: { id },
        });

        if (!product) {
            return NextResponse.json({ message: 'Produk tidak ditemukan' }, { status: 404 });
        }

        return NextResponse.json(product);

    } catch (error) {
        console.error(`--- ERROR SAAT MENGAMBIL PRODUK ${id} ---`);
        console.error("Pesan Error Lengkap:", error);
        return NextResponse.json({ message: 'Gagal mengambil data produk', errorDetails: String(error) }, { status: 500 });
    }
}

export async function PUT(request: Request, context: RouteContext) {
    const id = parseInt(context.params.id, 10);
    try {
        if (isNaN(id)) {
            return NextResponse.json({ message: 'ID Produk tidak valid' }, { status: 400 });
        }

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
        console.error(`--- ERROR SAAT MEMPERBARUI PRODUK ${id} ---`);
        console.error("Pesan Error Lengkap:", error);
        return NextResponse.json({ message: 'Gagal memperbarui produk', errorDetails: String(error) }, { status: 500 });
    }
}

export async function DELETE(request: Request, context: RouteContext) {
    const id = parseInt(context.params.id, 10);
    try {
        if (isNaN(id)) {
            return NextResponse.json({ message: 'ID Produk tidak valid' }, { status: 400 });
        }
        
        await prisma.produkPakaian.delete({
            where: { id },
        });
        
        return NextResponse.json({ message: 'Produk berhasil dihapus' }, { status: 200 });

    } catch (error) {
        console.error(`--- ERROR SAAT MENGHAPUS PRODUK ${id} ---`);
        console.error("Pesan Error Lengkap:", error);
        return NextResponse.json({ message: 'Gagal menghapus produk', errorDetails: String(error) }, { status: 500 });
    }
}
