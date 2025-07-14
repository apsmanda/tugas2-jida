import { propertyHomes } from "@/app/api/propertyhomes";
import ProductCard from "@/components/Home/Properties/Card/Card";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Shirts Collection - Stylish Threads",
};

const ShirtsPage = () => {
    const atasanProducts = propertyHomes.filter(
        (item) => item.category === 'Atasan'
    );

    return (
        <div className="pt-40 pb-20">
            <div className="container max-w-6xl mx-auto px-5">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold">Koleksi Atasan</h1>
                    <p className="text-lg mt-2 text-dark/70">Mulai dari kaos, kemeja, hingga blus elegan.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
                    {atasanProducts.map((item) => (
                        <ProductCard key={item.slug} item={item} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ShirtsPage;