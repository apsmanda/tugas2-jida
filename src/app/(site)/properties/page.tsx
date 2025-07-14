import PropertiesListing from "@/components/Properties/AllCollection";
import { Icon } from "@iconify/react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "All Collection - Stylish Threads",
};

const AllPropertiesPage = () => {
    return (
        <>
            <section className="pt-40">
                <div className='mb-12 text-center'>
                    <div className='flex gap-2.5 items-center justify-center mb-4'>
                        <Icon icon={'ph:t-shirt-fill'} width={24} height={24} className='text-primary' />
                        <p className='text-lg font-semibold'>Semua Koleksi</p>
                    </div>
                    <h1 className='text-5xl font-bold'>Jelajahi Gaya Anda</h1>
                    <p className="text-lg mt-2 text-dark/70">Temukan semua produk terbaik kami dalam satu tempat.</p>
                </div>
            </section>
            <PropertiesListing />
        </>
    );
};

export default AllPropertiesPage;