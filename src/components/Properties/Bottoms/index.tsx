import { propertyHomes } from "@/app/api/propertyhomes";
import ProductCard from "@/components/Home/Properties/Card/Card";
import React from "react";

const bottoms = () => {
    const bawahanProducts = propertyHomes.filter(
        (item) => item.category === 'Bawahan'
    );

    return (
        <section className="pb-20">
            <div className="container max-w-6xl mx-auto px-5">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
                    {bawahanProducts.map((item) => (
                        <ProductCard key={item.slug} item={item} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default bottoms;