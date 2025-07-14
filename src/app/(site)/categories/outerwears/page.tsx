import { propertyHomes } from "@/app/api/propertyhomes";
import ProductCard from "@/components/Home/Properties/Card/Card";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Outerwear Collection - Stylish Threads",
};

const OuterwearsPage = () => {
    const outerwearProducts = propertyHomes.filter(
        (item) => item.category === 'Outerwear'
    );

    return (
        <div className="pt-40 pb-20">
            <div className="container max-w-6xl mx-auto px-5">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold">Koleksi Outerwear</h1>
                    <p className="text-lg mt-2 text-dark/70">Lengkapi gayamu dengan jaket, kardigan, dan blazer trendi.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
                    {outerwearProducts.map((item) => (
                        <ProductCard key={item.slug} item={item} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OuterwearsPage;